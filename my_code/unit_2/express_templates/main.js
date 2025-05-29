"require strict";

const express = require("express");
const app = express();
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const layouts = require("express-ejs-layouts");

// Set EJS as the view engine
app.set("view engine", "ejs");

app.use(layouts);

//error handling
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);
app.use(express.static("public"));

// Define a route that uses the home controller
app.get("/name/:myName", homeController.respondWithName);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
