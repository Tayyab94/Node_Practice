const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  categor: String,
  model: String,
  isActive: Boolean,
});

module.exports = mongoose.model("products", productSchema);
