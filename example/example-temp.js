require('dotenv').config();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: '<datbase hostname> eg: localhost',
    user: '<database user> eg: appinterfaceuser',
    password: '<database password> eg: 0ne-v3rY-sTr0Ng-pAS5word'
});

con.connect(function (err) {
    if (err) {
        throw new Error(err);
    }
    console.log('CONNECTED');
    return con.query('select now()', (error, result) => {
        con.end(); // close the connection !!!!IMPORTANT!!!!
        if (error) {
            throw new Error(error);
        }
        return console.log(result);
    })
});
