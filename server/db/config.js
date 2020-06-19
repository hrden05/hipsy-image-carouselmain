const Promise = require('bluebird');

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  return db.queryAsync(`
  DROP TABLE IF EXISTS item;
  CREATE TABLE item (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(50)
    );`)
    .then(() => {
      return db.queryAsync(`
      DROP TABLE IF EXISTS image;
      CREATE TABLE image (
        id INT AUTO_INCREMENT PRIMARY KEY,
        image_url VARCHAR(100),
        item_id INTEGER,
        product_id INTEGER,
        CONSTRAINT fk_categorya
        FOREIGN KEY (item_id)
        REFERENCES item(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
        );`);
    })
    .error(err => {
      console.log(err);
    });
};
