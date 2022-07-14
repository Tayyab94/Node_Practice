const express = require("express");
const ObjectID = require("mongoose").ObjectId;
require("./config");
const productModel = require("./Models/product");

// This pagekage is use to upload the file..
const multer = require("multer");
const app = express();
// app.use(express.json());
app.use(express.json({ limit: 1024 * 1024 * 20 }));

// Search Product by multiple fields,

app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  var data = await productModel.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
      { model: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });

  res.send(data);
});

//Get ALL Products API.
app.get("/get-products", async (req, res) => {
  var data = await productModel.find();
  res.send(data);
});

app.get("/get-product-id/:id", async (req, res) => {
  var data = await productModel.findById(req.params.id.toString());
  res.send(data);
});

app.get("/getProdcutbyid/:_id", async (req, res) => {
  var data = await productModel.find(req.params);
  res.send(data);
});

app.get("/getProdcutbyname/:name", async (req, res) => {
  var data = await productModel.find({
    name: req.params.name,
  });
  res.send(data);
});
// Inser API
app.post("/create", async (req, res) => {
  var data = new productModel(req.body);
  var result = await data.save();
  console.log(req.body);
  res.send("Done");
});

app.put("/update/:_id", async (req, res) => {
  var data = await productModel.updateOne(req.params, { $set: req.body });
  res.send("Data Updated");
});

// this piece of code help us to upload the file in the file-Driectory
const uploadfile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images");
    },
    filename: function (req, file, cb) {
      cb(null, file.filename + "-" + Date.now() + ".jpg");
    },
  }),
});

// API for File Upload
app.post("/upload", uploadfile.single("user_file"), (req, res) => {
  res.send("File Uploaded");
});

app.listen(5000);
