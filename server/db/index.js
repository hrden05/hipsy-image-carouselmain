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
const masterSeed = () => {
  const seedDb1 = (value1) => {
    const insertQuery1 = 'INSERT INTO item (department) VALUES (?)';
    db.queryAsync(insertQuery1, [value1], (error, results) => {
      if (error) {
        console.log('error seeding', error);
      } else {
        console.log('suck-sess', results);
      }
    });
};

  const seedDb2 = (value2) => {
    const insertQuery2 = 'INSERT INTO image (image_url, item_id, product_id) VALUES ("www.placeimg.com/700/700/any", ?, ?)';
    db.queryAsync(insertQuery2, [value2, value2], (error, results) => {
      if (error) {
        console.log('error seeding', error);
      } else {
        console.log('suck-sess', results);
      }
    });
};

  const randomImageNumber = (id) => {
    let imageCount = Math.random() * (10 - 2) + 2;
    for (let j = 0; j <= imageCount; j += 1) {
      seedDb2(id);
    }
};

  for (let i = 1; i <= 100; i += 1) {
    if (i < 26) {
      seedDb1('clothing');
      randomImageNumber(i);
    } else if (i < 51) {
      seedDb1('art');
      randomImageNumber(i);
    } else if (i < 76) {
      seedDb1('jewelry');
      randomImageNumber(i);
    } else if (i <= 100) {
      seedDb1('miscellaneous');
      randomImageNumber(i);
    }
  }
};

db.connectAsync()
  .then(() => console.log(`Connected to ${database} as ID ${db.threadId}`))
  .then(() => db.queryAsync(`DROP DATABASE IF EXISTS ${database}`))
  .then(() => db.queryAsync(`CREATE DATABASE ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => tableConfig(db))
  .then(() => masterSeed());

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
