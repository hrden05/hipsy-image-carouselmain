const db = require('../db');

module.exports = {
  getAll: () => {
    const stringQuery = 'SELECT * FROM image';
    return db.queryAsync(stringQuery);
  },

  getItem: (id) => {
    return db.queryAsync(
      'SELECT * FROM image WHERE item_id = ?',
      [id],
    );
  },
};
