const { name } = require("ejs");
const express = require('express');
const router = express.Router();

// Skapa här arrayn för produkterna för startsida.
// Array = Objekt med ID, Titel, Brand, Pris, Bild, Lorem.
const products = [
  {
    name: "Vit T-Shirt",
    brand: "Levis",
    price: "299 SEK",
    image: "",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    name: "Vit T-Shirt med tryck",
    brand: "Brothers",
    price: "399 SEK",
    image: "",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    name: "Orange T-Shirt",
    brand: "Zalando",
    price: "349 SEK",
    image: "",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    name: "Rosa T-Shirt",
    brand: "Minus",
    price: "349 SEK",
    image: "",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    name: "Orangea Byxor",
    brand: "Lindex",
    price: "599 SEK",
    image: "",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    name: "Beige Byxor",
    brand: "Gucci",
    price: "1999 SEK",
    image: "",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    name: "Manchester Jacka",
    brand: "Levis",
    price: "2495 SEK",
    image: "",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
  {
    name: "Magväska",
    brand: "Hugo Boss",
    price: "995 SEK",
    image: "",
    isNew: true,
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."',
  },
];
// Skapa ett API (GET) - Skickar data till vår fe.
router.get('/', (req, res) => {
    res.json(products);
});

module.exports = router;