var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const Database = require("better-sqlite3");
const db = new Database("./api/products.db", {
  // Skriv ut SQL-kommandona som körs mot databasen
  verbose: console.log,
  // Skapa inte db-filen om den inte redan finns.
  // fileMustExist: true,
});


var indexRouter = require("./routes/index");
var productDetailsRouter = require("./routes/product-details");
var adminRouter = require("./routes/admin");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/product-details", productDetailsRouter);
app.use("/admin", adminRouter);



app.get("/new", function (req, res) {
  // req = request-objektet innehåller information om anropet
  // t.ex. att det är ett GET-arnop, och att URL är /admin.

  // res = response-objektet använder vi för att skicka tillbaka ett
  // svar till klienten.
  res.render("new", {
    title: "Administration",
  });
});

// POST /admin TEST.
app.post("/new", function (req, res) {
  // Data som skickas från frontend (webbläsaren), som angivits
  // i formuläret finns tillgänglig för oss att använda på backend
  // (alltså här =) via egenskapen "body" på request-objektet (req).
  const product = {
    productName: req.body.productName,
    description: req.body.description,
    image: req.body.image,
    brand: req.body.brand,
    sku: req.body.sku,
    price: req.body.price,
  };

  // Vi använder "db"-objektet för att kommunicera med databasen.

  // Vi skapar en statement - vi kör inte SQL-kommandot här, vi förbereder det enbart.
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

  // Nu kommer SQL-kommandot köras (INSERT INTO)
  insert.run(product);
  res.redirect('admin');  
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
