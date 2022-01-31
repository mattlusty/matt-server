const mongoose = require("mongoose");
const express = require("express");

const app = express();

// connect to db and start server app listening
mongoose
  .connect(
    "mongodb+srv://mattlusty123:supersecretpassword@cluster0.4pa5p.mongodb.net/matt-app?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("db connect success");
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log("Server is listening on PORT " + PORT);
    });
  });

//define routes
app.use("/portfolio/users", require("./routes/users"));
