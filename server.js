const http = require("http");

const PORT = process.env.PORT || 5000;
var server = http.createServer((req, res) => {
  console.log("Request received");
});

server.listen(PORT, () => {
  console.log("Server is listening on PORT " + PORT);
});
