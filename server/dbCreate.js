const mysql = require('mysql');
const Promise = require('bluebird');
const tableConfig = require('./db/config.js');

const database = 'hipsyimage';

const connection = mysql.createConnection({
  user: 'root',
  password: 'p4j4m4sII!',
  database: 'hipsyimage',
  multipleStatements: true,
});
const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => db.queryAsync(`DROP DATABASE IF EXISTS ${database}`))
  .then(() => db.queryAsync(`CREATE DATABASE ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => tableConfig(db));

module.exports = db;
