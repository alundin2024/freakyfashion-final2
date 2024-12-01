var express = require("express");
var router = express.Router();

function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const products = [
  {
    id: 1,
    name: "Vit T-Shirt",
    title: "En vit t-shirt",
    brand: "Levis",
    price: "299 SEK",
    image: "/images/tshirt,white.jpg",
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
    slug: generateSlug("Vit T-Shirt"),
  },
  {
    id: 2,
    name: "Vit T-Shirt med tryck",
    title: "En vit t-shirt med tryck",
    brand: "Brothers",
    price: "399 SEK",
    image: "/images/tshirt,white,branded.jpg",
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
    slug: generateSlug("Vit T-Shirt med tryck"),
  },
  {
    id: 3,
    name: "Orange T-Shirt",
    title: "En orange t-shirt",
    brand: "Zalando",
    price: "349 SEK",
    image: "/images/tshirt,orange.jpg",
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
    slug: generateSlug("Orange T-Shirt"),
  },
  {
    id: 4,
    name: "Rosa T-Shirt",
    title: "En rosa t-shirt",
    brand: "Minus",
    price: "349 SEK",
    image: "/images/pinkshirt.jpg",
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
    slug: generateSlug("Rosa T-Shirt"),
  },
  {
    id: 5,
    name: "Orangea Byxor",
    title: "Ett par orangea byxor",
    brand: "Lindex",
    price: "599 SEK",
    image: "/images/pants,orange.jpg",
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
    slug: generateSlug("Orangea Byxor"),
  },
  {
    id: 6,
    name: "Beige Byxor",
    title: "Ett par beige byxor",
    brand: "Gucci",
    price: "1999 SEK",
    image: "/images/pants,beige.jpg",
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
    slug: generateSlug("Beige Byxor"),
  },
  {
    id: 7,
    name: "Manchester Jacka",
    title: "En rosa manchester jacka",
    brand: "Levis",
    price: "2495 SEK",
    image: "/images/manchester,jacket.jpg",
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
    slug: generateSlug("Manchester Jacka"),
  },
  {
    id: 8,
    name: "Magväska",
    title: "En magväska från märket Hugo Boss",
    brand: "Hugo Boss",
    price: "995 SEK",
    image: "/images/duffelbag.jpg",
    isLiked: false,
    lorem:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
    slug: generateSlug("Magväska"),
  },
];

/* GET product-details page. */
router.get("/:slug", function (req, res, next) {
  const productSlug = req.params.slug;
  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    // Handle case when product is not found
    return res.status(404).render("error", {
      message: "Product not found",
      error: { status: 404 },
    });
  }

  const randomProducts = products
    .filter(p => p.slug !== productSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  res.render("products", {
    title: product.name,
    product: product, // Pass single product instead of products array
    products: randomProducts, // Keep this if you need it for "Liknande produkter" section
  });
});

module.exports = router;