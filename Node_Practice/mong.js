const Db_Connection = require("./mongoconnection");
const productCollection = "products";

// This is old technique...

// Db_Connection().then((resp) => {
//   resp
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

// new way to call the function

const main = async () => {
  let data = await Db_Connection();
  data = await data.find().toArray();
  console.log(data);
};

main();
