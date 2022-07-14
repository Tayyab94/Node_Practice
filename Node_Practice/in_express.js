const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Hello wOrld..</h1>");
});

app.get("/about", (req, res) => {
  res.send("This is about us page");
});

// Get the parameter from the query stirng
app.get("/help", (req, res) => {
  console.log(req.query);
  console.log("Requester name is : " + req.query.name);
  res.send("This is about us page");
});
app.listen(5000);
