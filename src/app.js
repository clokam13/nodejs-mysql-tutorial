// console.log("Subscribe to my channel - With Chanakya!");
require("dotenv").config({ path: __dirname + "/.env" });
const db = require("./utils/db.util");

//Import modules
const express = require("express");
const dogRoutes = require("./routes/dog.routes");

// Define PORT for HTTP Server
const PORT = 9900;

// Initialize Express
const app = express();

app.use(dogRoutes);

(async () => {
  await db.init();
  app.listen(PORT, (err) => {
    console.log(`Server is up at localhost ${PORT}`);
  });
})();
