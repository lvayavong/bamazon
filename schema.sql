
DROP DATABASE bamazon;


CREATE DATABASE bamazon;
USE bamazon;


CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
 department_name VARCHAR(100) not null,
 price decimal (20,2) null,
 stock integer default 0,
 PRIMARY KEY (id)
);
