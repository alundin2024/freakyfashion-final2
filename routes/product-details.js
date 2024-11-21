var express = require("express");
var router = express.Router();

const products = [
  {
    id: 1,
    name: "Vit T-Shirt",
    title: "En vit t-shirt",
    brand: "Levis",
    price: "299 SEK",
    image: "/images/tshirt,white.jpg",
    isLiked: true,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 2,
    name: "Vit T-Shirt med tryck",
    title: "En vit t-shirt med tryck",
    brand: "Brothers",
    price: "399 SEK",
    image: "/images/tshirt,white,branded.jpg",
    isLiked: true,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 3,
    name: "Orange T-Shirt",
    title: "En orange t-shirt",
    brand: "Zalando",
    price: "349 SEK",
    image: "/images/tshirt,orange.jpg",
    isLiked: true,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 4,
    name: "Rosa T-Shirt",
    title: "En rosa t-shirt",
    brand: "Minus",
    price: "349 SEK",
    image: "/images/pinkshirt.jpg",
    isLiked: true,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 5,
    name: "Orangea Byxor",
    title: "Ett par orangea byxor",
    brand: "Lindex",
    price: "599 SEK",
    image: "/images/pants,orange.jpg",
    isLiked: true,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 6,
    name: "Beige Byxor",
    title: "Ett par beige byxor",
    brand: "Gucci",
    price: "1999 SEK",
    image: "/images/pants,beige.jpg",
    isLiked: true,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 7,
    name: "Manchester Jacka",
    title: "En rosa manchester jacka",
    brand: "Levis",
    price: "2495 SEK",
    image: "/images/manchester,jacket.jpg",
    isLiked: true,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 8,
    name: "Magväska",
    title: "En magväska från märket Hugo Boss",
    brand: "Hugo Boss",
    price: "995 SEK",
    image: "/images/duffelbag.jpg",
    isLiked: true,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
];

/* GET product-details page. */
router.get("/:id", function (req, res, next) {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    // Handle case when product is not found
    return res.status(404).render("error", {
      message: "Product not found",
      error: { status: 404 },
    });
  }

  res.render("product-details", {
    title: product.name,
    product: product, // Pass single product instead of products array
    products: products, // Keep this if you need it for "Liknande produkter" section
  });
});

module.exports = router;
