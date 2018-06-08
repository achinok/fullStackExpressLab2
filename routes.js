"use strict";
const express = require("express");
const shopRoutes = express.Router();
let items = require("./items.js");

let pool = require("./pool.js");

shopRoutes.get("/items", (req, res) => {
  pool.query("SELECT * FROM cart2")
  .then(function(result){
      console.log(result)
  });  
  res.json(items);
});

shopRoutes.post("/items", (req, res) => {
  console.log(req.body);
});

shopRoutes.delete("/items/:id", (req, res) => {
  console.log(req.params.id);
});

shopRoutes.put("/items/:id", (req, res) => {
  console.log(req.params.id);
});

try {
  console.log(err);
  res.status(500); // 500 Server Error
  res.send("ERROR");
  }
catch (err){};  

module.exports = shopRoutes;

// 