const express = require("express");
const path = require("path");

const app = express();
const publcicPath = path.join(__dirname, "public");

// app.use(express.static(publcicPath));

// if you want to remove the file extension like. html, then use this line of code
app.get("", (_, res) => {
  res.sendFile(`${publcicPath}/index.html`);
});

app.get("/about", (_, res) => {
  res.sendFile(`${publcicPath}/about.html`);
});

app.get("/help", (_, res) => {
  res.sendFile(`${publcicPath}/html.html`);
});
app.get("*", (_, res) => {
  res.sendFile(`${publcicPath}/error.html`);
});

app.listen(5000);
