var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var productDetailsRouter = require("./routes/product-details");

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

app.get("/admin", function (req, res) {
  // req = request-objektet innehåller information om anropet
  // t.ex. att det är ett GET-arnop, och att URL är /register.

  // res = response-objektet använder vi för att skicka tillbaka ett
  // svar till klienten.
  res.render("admin", {
    title: "Administration",
  });
});

// POST /register
app.post("/admin", function (req, res) {
  // Data som skickas från frontend (webbläsaren), som angivits
  // i formuläret finns tillgänglig för oss att använda på backend
  // (alltså här =) via egenskapen "body" på request-objektet (req).
  const student = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    socialSecurityNumber: req.body.socialSecurityNumber,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    image: req.body.image,
  };

  // Vi använder "db"-objektet för att kommunicera med databasen.

  // Vi skapar en statement - vi kör inte SQL-kommandot här, vi förbereder det enbart.
  const insert = db.prepare(`
    INSERT INTO students (
      firstName, 
      lastName,
      socialSecurityNumber,
      email,
      phoneNumber,
      image
    ) VALUES (
      @firstName, 
      @lastName,
      @socialSecurityNumber,
      @email,
      @phoneNumber,
      @image
     )
  `);

  // Nu kommer SQL-kommandot köras (INSERT INTO)
  insert.run(student);

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
