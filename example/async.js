require('dotenv').config();
var mysql = require('mysql');

const host = process.env.DBHOST;
const user = process.env.DBUSER;
const password = process.env.DBPW;

var con = mysql.createConnection({ host, user, password });

module.exports = async function query(queryStringParameter) {
    console.log()
    try {
        // const client = await 
        const mySqlClient = await con.connect();
        console.log(mySqlClient);
        const result = await mySqlClient.query(queryStringParameter);
        console.log('ASYNC: ',result);
        con.close();
        return result;
    } catch (error) {
        return error;
    }
};
