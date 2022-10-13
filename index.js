const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/route");
const path = require("path");
require('dotenv').config();

mongoose
  .connect(
    "mongodb+srv://kishan:sample123@cluster0.qvulut0.mongodb.net/color?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/v1", routes);
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-with,Content-Type,Accept,Authorization,On-behalf-of, x-sg-elas-acl"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});
const port = process.env.PORT || 8080
app.listen(port, () => [
  console.log("server is running on http://localhost:8080"),
]);
