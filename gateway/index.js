require("dotenv").config();

const express = require("express");
const cors = require("cors");

const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", proxy("http://localhost:8001"));

app.listen(process.env.PORT, () => {
  console.log("Gateway is listeining to PORT 8000");
});
