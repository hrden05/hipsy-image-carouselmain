const db = require('../db');

module.exports = {
  getAll: (callback) => {
    const stringQuery = 'SELECT * FROM item, image';
    db.query(stringQuery, (error, results) => {
      callback(error, results);
    });
  },
};
