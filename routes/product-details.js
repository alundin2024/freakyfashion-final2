var express = require('express');
var router = express.Router();

/* GET product-details page. */
router.get('/', function(req, res, next) {
  console.log("Funkar också!");
  res.render('product-details', { title: 'Product Details' });
});

module.exports = router;
