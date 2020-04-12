require('dotenv').config();
var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: '<datbase hostname> eg: localhost',
//     user: '<database user> eg: appinterfaceuser',
//     password: '<database password> eg: 0ne-v3rY-sTr0Ng-pAS5word'
// });

const host = process.env.DBHOST;
const user = process.env.DBUSER;
const password = process.env.DBPW;

var con = mysql.createConnection({ host, user, password });

// const q = 

con.connect(function (err) {
    if (err) {
        throw new Error(err);
    }
    console.log('CONNECTED');
    return con.query(require('./manual-interpolation'), (error, result) => {
    // return con.query('select now()', (error, result) => {
        con.end(); // close the connection !!!!IMPORTANT!!!!
        if (error) {
            console.error(error.message);
            console.error(error.stack);
            throw new Error(error);
        }
        return console.log(result);
    })
});
