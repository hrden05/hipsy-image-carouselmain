const mysql = require('mysql');
const tableConfig = require('./config.js');
const Promise = require('bluebird');
const database = 'hipsyimage';

const connection = mysql.createConnection({
  user: 'root',
  password: 'p4j4m4sII!',
  database: 'hipsyimage',
  multipleStatements: true,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to ${database} as ID ${db.threadId}`));

// const getAllImages = function(callback) {
//   const queryString = 'SELECT * FROM image';
//   connection.query(queryString, (error, results) => {
//     if (error) {
//       callback(error, results);
//     } else {
//       callback(null, results);
//     }
//   });
// };

module.exports = db;
