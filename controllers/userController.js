const { getPostData } = require("../utils/utils");

async function createUser(req, res) {
  console.log("create user");
  try {
    var body = await getPostData(req);
    var object = JSON.parse(body);
    var user = {
      name: object.name,
      email: undefined,
      username: 007,
    };

    // Pass to Model to implement writing to database
    // var newUser = User.create(user);

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } catch (error) {
    console.log("Error: " + error);
  }
}

module.exports = { createUser };
