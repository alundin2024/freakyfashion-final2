var express = require('express');
var router = express.Router();

const products = [
  {
    id: 1,
    name: "Vit T-Shirt",
    brand: "Levis",
    price: "299 SEK",
    image: "/images/tshirt,white.jpg",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 2,
    name: "Vit T-Shirt med tryck",
    brand: "Brothers",
    price: "399 SEK",
    image: "/images/tshirt,white,branded.jpg",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 3,
    name: "Orange T-Shirt",
    brand: "Zalando",
    price: "349 SEK",
    image: "/images/tshirt,orange.jpg",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 4,
    name: "Rosa T-Shirt",
    brand: "Minus",
    price: "349 SEK",
    image: "/images/pinkshirt.jpg",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 5,
    name: "Orangea Byxor",
    brand: "Lindex",
    price: "599 SEK",
    image: "/images/pants,orange.jpg",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 6,
    name: "Beige Byxor",
    brand: "Gucci",
    price: "1999 SEK",
    image: "/images/pants,beige.jpg",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 7,
    name: "Manchester Jacka",
    brand: "Levis",
    price: "2495 SEK",
    image: "/images/manchester,jacket.jpg",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    id: 8,
    name: "Magväska",
    brand: "Hugo Boss",
    price: "995 SEK",
    image: "/images/duffelbag.jpg",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Freaky Fashion', products});
  console.log("Funkar!");
});

module.exports = router;
