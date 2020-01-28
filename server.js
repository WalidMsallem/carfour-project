// server.js
// load the things we need
var express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const user = require("./src/routes/user");
const pdfRoutes = require("./src/routes/pdf");



var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(require("morgan")("dev"));


//DB Config
const db = require("./src/config/keys").mongoURI;
// var mongoDB = "mongodb://127.0.0.1/local_DB";

//Connect to Mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./src/config/passport")(passport);




app.use("/api/pdf", pdfRoutes);
app.use("/api/user", user);

const port = process.env.PORT || 8080;

app.listen(port);
console.log(`${port} is the magic port`);
