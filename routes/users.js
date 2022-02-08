const express = require("express");
const userController = require("../controllers/user.js");
const cors = require("cors");

const portUsersRouter = express.Router();

portUsersRouter
  .route("/")
  .get((req, res) => {
    console.log("GET /portfolio/users");
    res.send("GET /portfolio/users");
  })
  .post((req, res) => {
    console.log("POST = /portfolio/users");
    // res.send("POST = /portfolio/users");

    userController.createUser(req, res);
  });

portUsersRouter
  .route("/:id")
  .get((req, res) => {
    console.log("xroute = /portfolio/users/:id");
    res.send("xroute = /portfolio/users/:id");
  })
  .delete((req, res) => {
    console.log("xroute = /portfolio/users/:id");
    res.send("xroute = /portfolio/users/:id");
  });

module.exports = portUsersRouter;
