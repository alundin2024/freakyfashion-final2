var express = require('express');
var router = express.Router();

const products = [
  {
    id: 1,
    name: "Vit T-Shirt",
    title: "En vit t-shirt",
    brand: "Levis",
    price: "299 SEK",
    image: "/images/tshirt,white.jpg",
    isNew: true,
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
    isNew: false,
    isLiked: false,
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
    isNew: false,
    isLiked: false,
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
    isNew: false,
    isLiked: false,
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
    isNew: false,
    isLiked: false,
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
    isNew: false,
    isLiked: false,
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
    isNew: false,
    isLiked: false,
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
    isNew: false,
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
