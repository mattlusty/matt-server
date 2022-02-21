const express = require("express");
const userController = require("../controllers/user.js");
const cors = require("cors");

const router = express.Router();

// route base === "/portfolio/users"
router
  .route("/")
  .get((req, res) => {
    const body = { message: "GET /portfolio/users" };
    res.send(JSON.stringify(body));
  })
  .post((req, res) => {
    userController.createUser(req, res);
  })
  .put((req, res) => {
    const body = { message: "PUT /portfolio/users" };
    res.send(JSON.stringify(body));
  });

router
  .route("/:id")
  .get((req, res) => {
    const body = { message: `GET /portfolio/users/:id id=${req.params.id}` };
    res.send(JSON.stringify(body));
  })
  .delete((req, res) => {
    const body = { message: `DELETE /portfolio/users/:id id=${req.params.id}` };
    res.send(JSON.stringify(body));
  });

module.exports = router;
