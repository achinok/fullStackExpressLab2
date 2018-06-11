"use strict";
const express = require("express");
const app = express();
const shopRoutes = require("./routes.js");

app.use("/", shopRoutes);
app.use(express.static(__dirname + "/public"));

let port = 8000;
const server = app.listen(port, () => {
  console.log("Server is up and running. Port Num: "+port);
});

// server for app and database, numbers different