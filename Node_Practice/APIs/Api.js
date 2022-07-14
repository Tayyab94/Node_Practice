const express = require("express");

const ObjectID = require("mongodb").ObjectId;
const Db_Connection = require("../mongoconnection");
const app = express();
app.use(express.json()); // this line of code is use to get the dat from the request

app.get("/all-products", async (req, res) => {
  let data = await Db_Connection();
  data = await data.find().toArray();

  res.send(data);
});

// POST API- Insert data into product collection
app.post("/", async (req, res) => {
  let data = await Db_Connection();
  var result = await data.insertOne(req.body);
  res.send(result);
});

// Update API

// Update the Record by Id
app.put("/:id", async (req, res) => {
  let data = await Db_Connection();

  try {
    var result = await data.updateOne(
      { _id: new ObjectID(req.params.id.toString()) },
      { $set: req.body }
    );
    res.status(200).send({ msg: "Updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message:
        error.message || "Some error occurred while Updating  the Record.",
    });
    return;
  }
});

// app.put("/:name", async (req, res) => {
//   let data = await Db_Connection();
//   var result = await data.updateOne(
//     { name: req.params.name },
//     { $set: req.body }
//   );

//   res.send(result);
//   if (result.acknowledged == true && result.upsertedCount > 0) {
//     res.send({ msg: "Updated Successfully", data: req.body });
//   }
// });

// Delete the Product
app.delete("/delete/:id", async (req, res) => {
  let data = await Db_Connection();
  var result = await data.deleteOne({
    _id: new ObjectID(req.params.id.toString()),
  });

  res.send(result);
});
app.listen(5000);
