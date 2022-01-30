const http = require("http");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mattlusty123:supersecretpassword@cluster0.4pa5p.mongodb.net/matt-app?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("db connect success");
    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => {
      console.log("Server is listening on PORT " + PORT);
    });
  });

var server = http.createServer((req, res) => {
  req.url === "/portfolio/users" ? require("./routes/portfolio/user")(req, res) : "";
});
