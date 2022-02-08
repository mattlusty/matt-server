const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

// database connect & server listen
mongoose
  .connect(
    "mongodb+srv://mattlusty123:supersecretpassword@cluster0.4pa5p.mongodb.net/matt-app?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("db connect success");
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log("Server is listening on PORTY " + PORT);
    });
  });

// middleware
app.use(cors());

// routes
app.use("/portfolio/users", require("./routes/users"));
