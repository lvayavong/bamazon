
DROP DATABASE IF EXISTS bamazon;


CREATE DATABASE bamazon;
USE bamazon;


CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
 department_name(100) not null,
 price
  PRIMARY KEY (id)
--   item_id (unique id for each product)

--    product_name (Name of product)

--    department_name

--    price (cost to customer)

--     stock_quantity
);
