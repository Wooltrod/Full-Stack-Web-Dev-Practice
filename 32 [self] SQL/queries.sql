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

INSERT INTO products (id, name)
VALUES (2, 'Pencil')
