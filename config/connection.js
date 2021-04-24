// Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'vkh7buea61avxg07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'ci0fi7s37b8z92ig',
  // NOTE: Be sure to add your MySQL password here!
  password: 'wy5n1ct912yknwvh',
  database: 'ian94f2idlf19w5h',
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
