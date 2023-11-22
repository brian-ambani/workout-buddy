const express = require("express");

//express app
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the server" });
});

//listen for requests
app.listen(3000, () => {
  console.log("listening on port 3000");
});
