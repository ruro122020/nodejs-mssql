//side note for running server on terminal with nodemon. Use: npm run server
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const knex = require("knex");
const dbConfig = require("./dbConfig");

const db = knex(dbConfig);

//middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

//server listening
app.listen(PORT, () => console.log("server is live on port" + port));

//Routes
app.get("/", async (req, res) => {
  console.log("here yo");
  db.select()
    .from("users")
    .then((results) => {
      res.send("okay!");
      console.log("results", results);
    })
    .catch((err) => {
      res.send("not okay man");
      console.log("err", err);
    });
});
