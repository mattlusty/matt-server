const express = require("express");
const userController = require("../controllers/user.js");
const cors = require("cors");

const portUsersRouter = express.Router();

portUsersRouter
  .route("/")
  .get((req, res) => {
    res.send("GET /portfolio/users");
  })
  .post((req, res) => {
    console.log("POSTING");
    console.log("req: ", req);
    userController.createUser(req, res);
    // res.send("POST /portfolio/users");
  })
  .put((req, res) => {
    res.send("PUT /portfolio/users");
  });

portUsersRouter
  .route("/:id")
  .get((req, res) => {
    res.send(`GET /portfolio/users/:id id=${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`DELETE /portfolio/users/:id id=${req.params.id}`);
  });

module.exports = portUsersRouter;
