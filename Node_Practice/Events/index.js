const express = require("express");
const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();

let count = 0;
event.on("GetCounter", (req, res) => {
  count++;
  console.log("COunter Value: " + count);
});

app.get("/callEvent", (req, res) => {
  res.send("Generating Event");

  event.emit("GetCounter");
});

app.get("/callEvent_2nd", (req, res) => {
  res.send("Generating Event");

  event.emit("GetCounter");
});
app.listen(5000);
