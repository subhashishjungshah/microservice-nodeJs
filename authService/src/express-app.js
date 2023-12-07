const express = require("express");
const cors = require("cors");

module.exports = (app) => {
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  app.use(cors());

  //   Setup Middleware for our express application
};
