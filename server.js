const http = require("http");
const { createUser } = require("./controllers/userController.js");

const PORT = process.env.PORT || 5000;
var server = http.createServer((req, res) => {
  console.log("Request received");
  // var method = req.method;
  // var url = req.url;
  // console.log("the url was " + url);
  if (req.url === "/api/users" && req.method === "POST") {
    console.log("route create user");
    createUser(req, res);
  }
});

server.listen(PORT, () => {
  console.log("Server is listening on PORT " + PORT);
});
