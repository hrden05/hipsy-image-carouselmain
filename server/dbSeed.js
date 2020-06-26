const mysql = require('mysql');

const Promise = require('bluebird');
const connectInfo = require('./db/connectInfoGarbage.js');

const connection = mysql.createConnection(connectInfo);

const db = Promise.promisifyAll(connection, { multiArgs: true });

const masterSeed = () => {
  const seedDb1 = (value1) => {
    const insertQuery1 = 'INSERT INTO item (department) VALUES (?)';
    db.queryAsync(insertQuery1, [value1], (error, results) => {
      if (error) {
        console.log('error seeding', error);
      } else {
        console.log('succcess', results);
      }
    });
  };

  const seedDb2 = (value1, value2) => {
    const insertQuery2 = 'INSERT INTO image (image_url, item_id, product_id) VALUES (?, ?, ?)';
    db.queryAsync(insertQuery2, [value1, value2, value2], (error, results) => {
      if (error) {
        console.log('error seeding', error);
      } else {
        console.log('succcess', results);
      }
    });
  };
  const earlArray = [
    "http://placeimg.com/1075/640/animals",
    "http://placeimg.com/1075/640/nature",
    "http://placeimg.com/1075/640/architecture",
    "http://placeimg.com/1075/640/tech",
    "http://placeimg.com/1075/640/people",
    "http://placebeard.it/1075/640",
    "https://www.placecage.com/1075/640",
    "https://www.fillmurray.com/1075/640",
    "https://placekitten.com/1075/640",
    "https://baconmockup.com/1075/640/",
  ];
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const randomImageNumber = (id) => {
    const imageCount = Math.random() * (10 - 2) + 2;
    for (let j = 0; j <= imageCount; j += 1) {
      const currentEarl = earlArray[getRandomInt(0, 10)];
      seedDb2(currentEarl, id);
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
  .then(() => masterSeed());

module.exports = masterSeed;
