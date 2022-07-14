const { MongoClient } = require("mongodb");

const url =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const dataBaseName = "e-comdb";
const productCollection = "products";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

const client = new MongoClient(url, options);

const Db_Connection = async () => {
  var result = await client.connect();

  let db = result.db(dataBaseName);

  return db.collection(productCollection);
  //   let collection = db.collection(productCollection);

  //   let products = await collection.find().toArray();

  //   console.log(products);
};

module.exports = Db_Connection;
