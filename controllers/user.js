const { getPostData } = require("../utils/utils");
const User = require("../models/user");

async function createUser(req, res) {
  console.log("create user");
  try {
    var body = await getPostData(req);
    var userObject = JSON.parse(body);

    // Check database if user exists
    var exists = await User.find({ username: userObject.username });
    if (exists.length === 0) {
      // username does not preexist on a document
      const userDocument = await User.create(userObject);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(userDocument));
    } else {
      res.statusCode = 409;
      const message = { message: "Username already exists" };
      res.end(JSON.stringify(message));
    }
  } catch (error) {
    console.log("Error Catch: ", error);
  }
}

module.exports = { createUser };
