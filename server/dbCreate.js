const mysql = require('mysql');
const Promise = require('bluebird');
const tableConfig = require('./db/config.js');
const connectInfo = require('./db/connectInfoGarbage.js');

const database = 'hipsyimage';

const connection = mysql.createConnection(connectInfo);

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => db.queryAsync(`DROP DATABASE IF EXISTS ${database}`))
  .then(() => db.queryAsync(`CREATE DATABASE ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .finally(() => tableConfig(db));

module.exports = db;
