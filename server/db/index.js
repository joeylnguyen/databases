var mysql = require('mysql');
var PASSWORD = require('../../hello.js').PASSWORD;

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  user: 'root',
  password: PASSWORD,
  database: 'chat'
});

connection.connect();

module.exports = connection;