const mongoose = require("mongoose");
const options = require("../Helper/ConnectionOption");

// Connecting the Mongo Db
mongoose.connect("mongodb://localhost:27017/e-comdb", options);

// Model Schema...
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

// Insert Function
const SaveIn = async () => {
  const productModel = mongoose.model("products", productSchema);
  let data = new productModel({
    name: "DELL G500",
    price: 22,
    brand: "HP",
    category: "Programming",
  });
  let result = await data.save();
  console.log(result);
};

//.Update the Data from the Mongodb..
const UpdateDb = async () => {
  const productModel = mongoose.model("products", productSchema);

  let data = await productModel.updateOne(
    { name: "DELL G10" },
    {
      $set: {
        name: "DELL G1500",
        price: 200,
        brand: "Dell",
        category: "Cyber Security",
      },
    }
  );

  console.log(data);
};

// This is Delete function
const DeleteProduct = async () => {
  const productModel = mongoose.model("products", productSchema);

  let data = await productModel.deleteOne({ name: "DELL G1500" });

  console.log(data);
};

DeleteProduct();
