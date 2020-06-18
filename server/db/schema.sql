DROP DATABASE IF EXISTS hipsyimage;

CREATE DATABASE hipsyimage;

USE hipsyimage;

DROP TABLE IF EXISTS item;
		
CREATE TABLE item (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department VARCHAR(50)
);

-- ---
-- Table 'image'
-- 
-- ---

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
  -- CONSTRAINT fk_categoryb
  -- FOREIGN KEY (product_id)
  -- REFERENCES item(id)
  --   ON UPDATE CASCADE
  --   ON DELETE CASCADE
);

-- ---
-- Foreign Keys 
-- ---





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
