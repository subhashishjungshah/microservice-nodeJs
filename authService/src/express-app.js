const express = require("express");
const cors = require("cors");
const { authApi } = require("./api");

module.exports = (app) => {
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  app.use(cors());

  authApi(app);

  //   Setup Middleware for our express application
};
