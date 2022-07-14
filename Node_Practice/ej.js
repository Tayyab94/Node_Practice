const express = require("express");
const path = require("path");
const app = express();
const publichPath = path.join(__dirname, "public");
app.use(express.static(publichPath));
app.set("view enginer", "ejs");

// This middleware use to check the user Age..
const filterAction_middleware = (req, res, next) => {
  if (!req.query.age) {
    res.send("tell you age please");
  } else if (req.query.age < 18) {
    res.send("Age should be 18+");
  } else {
    next();
  }
};

// by using this line of cod.. this middleware will be apply through all routes.
// app.use(filterAction_middleware);

app.get("/", (req, res) => {
  res.sendFile(`${publichPath}/index.html`);
});

// we have apply the route level middleware by using this lien of code
// app.get("/about", filterAction_middleware, (req, res) => {
//   res.sendFile(`${publichPath}/about.html`);
// });

app.get("/about", filterAction_middleware, (req, res) => {
  res.sendFile(`${publichPath}/about.html`);
});

app.get("/profile", (_, res) => {
  const user = {
    name: "Tayab",
  };
  res.render("profile", { user });
});

app.listen(5000);
