"use strict";
const express = require("express");
const shopRoutes = express.Router();
let items = require("./items.js");

let pool = require("./pool.js");

shopRoutes.get("/items", (req, res) => {
  pool.query("SELECT * FROM ShopDB")
  .then(function(result){
      console.log("got it")
  });  
  res.json(items);
});

shopRoutes.post("/items", (req, res) => {
  let sql = ("INSERT INTO ShoppingCart (ID, Product, Price, Quantity)") +
  "VALUES ($1::int, $2::text, $3::numerical $4::numerical)";
let values = [shopRoutes.ID, shopRoutes.Product, shopRoutes.Price, shopRoutes.Quantity];  
pool.query(sql, values).then(function(result){
  console.log("Inserted");
});
res.json(items);
});

shopRoutes.delete("/items/:id", (req, res) => {
  let sql = ("DELETE FROM ShoppingCart WHERE id=$1::int;")
  let values = ["id"];
  pool.query("sql, values").then((result) => {
  console.log("Deleted");
});
res.json(items);
});

shopRoutes.put("/items/:id", (req, res) => {
  let sql ="UPDATE ShoppingCart SET price=$3::num WHERE name=$2::text";
  let values = [7, "bread"];
  pool.query("sql, values").then((result) => {
  console.log("Updated");
})
res.json(items);
})

try {
  console.log(err);
  res.status(500); // 500 Server Error
  res.send("ERROR");
  }

catch (err){};  

module.exports = shopRoutes;

