const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
// first must connect!
connection.connect();

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

module.exports = connection;
