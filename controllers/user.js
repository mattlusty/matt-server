const { getPostData } = require("../utils/utils");
const User = require("../models/user");

async function createUser(req, res) {
  console.log("create user");
  try {
    var body = await getPostData(req);
    var object = JSON.parse(body);

    var userObject = {
      name: object.name,
      username: object.username,
      email: object.email,
    };

    // Call to Model to write to database collection
    const userDocument = await User.create(userObject);

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(userDocument));
  } catch (error) {
    console.log("Error: " + error);
  }
}

module.exports = { createUser };
