DROP DATABASE IF EXISTS hipsyimage;

CREATE DATABASE hipsyimage;

USE hipsyimage;

DROP TABLE IF EXISTS item;
		
CREATE TABLE item (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INTEGER,
  department VARCHAR(50),
  PRIMARY KEY (ID)
);

-- ---
-- Table 'image'
-- 
-- ---

DROP TABLE IF EXISTS image;
		
CREATE TABLE image (
  id INT NOT NULL AUTO_INCREMENT,
  image_url VARCHAR(100),
  item_id INTEGER,
  PRIMARY KEY (ID)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE image ADD FOREIGN KEY (item_id) REFERENCES item (id);
ALTER TABLE item ADD FOREIGN KEY (product_id) REFERENCES item (id);



-- ---
-- Table Properties
-- ---

-- ALTER TABLE `item` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `image` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `item` (`id`,`product_id`,`department`) VALUES
-- ('','','');
-- INSERT INTO `image` (`id`,`image_url`,`item_id`) VALUES
-- ('','','');
