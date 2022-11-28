"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3002;

// Create a singleton (an instance of express)
const app = express();

// Middleware (functions that interact with the request / response object)
app.use(cors());

app.get("/", (req, res, next) => {
  res.status(200).send("Hello World");
});

function start() {
  app.listen(PORT, () => console.log("Listening on port: ", PORT));
}

module.exports = { start, app };
