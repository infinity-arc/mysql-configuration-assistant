require('dotenv').config();
const
    mysql = require('mysql'),
    host = process.env.DBHOST,
    user = process.env.DBUSER,
    password = process.env.DBPW,
    con = mysql.createConnection({ host, user, password });

con.connect(function (err) {
    if (err) {
        console.error('NOT CONNECTED!');
        throw err;
    }
    console.log("Connected!")
    executeDataBaseQuery(con)
});

function executeDataBaseQuery(dbClient) {
    console.log("--> Running Query !");
    const
        testConnection = process.argv[2] === '--test-connection',
        query = testConnection
            ? 'select now()'
            : readQueryFile();

    console.log(readQueryFile());

    return dbClient.query(query, (err, queryResult) => {

        if (err) {
            if (err.code === 'ER_EMPTY_QUERY') {
                console.log('\nNOTHING HAPPENED: No queries are written in the "script.sql" file\n');
                dbClient.end();
                process.exit(0);
            } else {
                dbClient.end();
                throw new Error(err.message);
            }
    }

        return testConnection
        ? console.log('SERVER-TIME: ', queryResult[0]['now()'])
        : ((callback) => {
            console.table(queryResult);
            callback(con)
        })(function (dbCon) {
            dbCon.end();
        })
})
}

function readQueryFile() {
    const lines = require('fs').readFileSync('./script.sql', 'utf8').split('\n');
    for (let i = 0; i < lines.length; i++) lines[i] = lines[i].trim();
    return lines.filter(line => line.substring(0, 2) !== '--').join('');
}