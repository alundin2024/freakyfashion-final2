-- database: c:\Workspaces\JavaScript1\freakyfashion\db\product-list.db

SELECT * FROM products;

CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productName TEXT,
    description TEXT,
    image,
    brand,
    sku,
    price
);