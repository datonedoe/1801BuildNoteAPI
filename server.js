// https://www.youtube.com/watch?v=fsCjFHuMXj0
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db");


const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true}))



MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log("Error:", err);

  require("./app/routes")(app, database);
  app.listen(port, () => {
    console.log("Server's running on", port);
  })
})
