const express = require("express");
const expressApp = require("./express-app");
const { PORT } = require("./config");

const startServer = () => {
  const app = express();

  expressApp(app);

  app
    .listen(PORT, () => {
      console.log(`Listening to port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit(1);
    });
};

startServer();
