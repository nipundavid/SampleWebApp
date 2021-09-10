const express = require("express");
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("This is a sample page");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
