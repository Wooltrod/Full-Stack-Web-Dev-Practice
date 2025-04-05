/*CREATE TABLE products (
    id INT NOT NULL, --adding comments
    name STRING,
    price MONEY,
    PRIMARY KEY (id)
)*/

/*INSERT INTO products
VALUES (1, 'Pen', 1.20)*/

--inserting a partial record (without price):
--INSERT INTO <table_name> (<fields you have data for>)

/*INSERT INTO products (id, name)
VALUES (2, 'Pencil')*/


--selecting the entire database:
/*SELECT * FROM "products"*/

--selecting particular columns/fields:
/*SELECT price, name FROM "products"*/

--selecting particular rows (WHERE):
/*SELECT * WHERE id=1*/

--updating particular records:
/*UPDATE products SET price = 0.80 where id=2*/

--Adding columns/fields to an existing table:
/*ALTER <table_name> ADD <field_name> <data_type>*/
/*ALTER products ADD price INT*/

--Deleting records
/*DELETE FROM <table_name> WHERE <specific_field_value>*/

--Database Relationships, Foreign Keys & Inner Joins
--First, we create an "Orders" table with foreign keys (fields) linked to two different tables
/*CREATE TABLE orders(
id INT NOT NULL,
order_number INT,
customer_id INT,
product_id INT,
PRIMARY KEY (id),
FOREIGN KEY(customer_id) REFERENCES customers (id)
FOREIGN KEY(product_id) REFERENCES products (id)*/

--Example a: Joining the "Orders" table with the "Customers" table based on the FK 'customer_id'
/*SELECT orders.order_number, 
customers.first_name, 
customers.last_name, 
customers.address
FROM orders
INNER JOIN customers 
ON orders.customer_id = customer.id*/

--Example b: Joining the "Orders" table with the "Products" table based on the FK 'product_id'
/*SELECT orders.order_number, 
products.name, 
products.pricee, 
products.stock
FROM orders
INNER JOIN products 
ON orders.product_id = product.id*/