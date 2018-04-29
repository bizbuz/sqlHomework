DROP database if exists bamazon;
create database bamazon;

use bamazon ;

create table products(

item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR (20) NOT NULL,
department_name VARCHAR (20),
price DECIMAL(10,2) NOT NULL,
stock_quantity INT (10),
PRIMARY KEY (item_id)
);

insert into products (product_name, department_name, price, stock_quantity)
values( 'Banana', 'Food', 2, 10);

insert into products (product_name, department_name, price, stock_quantity)
values( 'Mighty Muggs', 'Toys', 5, 10);

insert into products (product_name, department_name, price, stock_quantity)
values( 'iPhone', 'Electronics', 100, 2);

insert into products (product_name, department_name, price, stock_quantity)
values( 'Assam Tea', 'Food', 20, 3);

insert into products (product_name, department_name, price, stock_quantity)
values( 'Swiss Bell', 'Decor', 25, 2);

insert into products (product_name, department_name, price, stock_quantity)
values( 'Patio Furniture', 'Decor', 150, 2);

insert into products (product_name, department_name, price, stock_quantity)
values( 'Dog Food', 'Pet', 15, 10);

insert into products (product_name, department_name, price, stock_quantity)
values( 'Powerbank', 'Electronics', 175, 12);

insert into products (product_name, department_name, price, stock_quantity)
values( 'Cookies', 'Food', 2, 30);

insert into products (product_name, department_name, price, stock_quantity)
values( 'Eggs', 'Food', 4, 50);


select * from products