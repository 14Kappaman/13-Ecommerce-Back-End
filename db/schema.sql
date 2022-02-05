-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;
use ecommerce_db;

Create Table Category (
    id int not null primary key auto_increment,
    Category_Name text not null
);
Create Table Product (
    id int not null primary key auto_increment,
    Product_Name text not null, 
    price decimal not null,
    stock int not null default(10),
    category_id int references Category(id)
);
Create Table Tag(
    id int not null primary key auto_increment,
    tag_name text
);
Create Table ProductTag(
    id int not null primary key auto_increment,
    product_id int references Product (id),
    tag_id int references Tag (id)
);