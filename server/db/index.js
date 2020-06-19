const mysql = require('mysql');
const Promise = require('bluebird');

const connectInfo = require('./connectInfo.js');

const database = 'hipsyimage';

const connection = mysql.createConnection(connectInfo);

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to ${database} as ID ${db.threadId}`));

module.exports = db;
