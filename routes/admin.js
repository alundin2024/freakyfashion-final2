var express = require('express');
var router = express.Router();

const Database = require("better-sqlite3");
const db = new Database("./api/products.db", {
  verbose: console.log,
});


//API ROUTES
router.get('/api/products', function(req, res, next) {
  //byt ut mot att fråga databasen efter alla products, få som array och skicka vidare
  
  //database, find products
  const query = db.prepare(`
    SELECT * FROM products
  `).all();

  res.send(query);
  
});

router.get('/products', function(req, res, next) {
  res.render('admin', { title: 'Administration', products: []});
});

router.get('/products/all', function(req, res, next) {
  //byt ut mot att fråga databasen efter alla products, få som array och skicka vidare
  // fattar ej ovan kommentar. 
  
  //database, find products
  const query = db.prepare(`
    SELECT * FROM products
  `).all();

  res.render('admin', { title: 'Administration', products: query});
  console.log("Funkar definitvt!");
});

router.get("/new", function (req, res) {

  res.render("new", {
    title: "Administration",
  });
});


router.post("/new", function (req, res) {
  const product = {
    productName: req.body.productName,
    description: req.body.description,
    image: req.body.image,
    brand: req.body.brand,
    sku: req.body.sku,
    price: req.body.price,
  };

  const insert = db.prepare(`
    INSERT INTO products (
      productName, 
      description,
      image,
      brand,
      sku,
      price
    ) VALUES (
      @productName, 
      @description,
      @image,
      @brand,
      @sku,
      @price
    )
  `);

  insert.run(product);

  // Check the request type
  if (req.headers["content-type"] === "application/json") {
    // API request
    res.status(201).json({ message: "Product saved successfully!" });
  } else {
    // Form submission
    res.redirect('/admin/products');
  }
});

module.exports = router;