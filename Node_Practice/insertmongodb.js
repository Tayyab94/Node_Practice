const Db_Connection = require("./mongoconnection");

const InsertData = async () => {
  let db = await Db_Connection();

  const result = await db.insertMany([
    {
      name: "Macbook Air 2013",
      price: 121,
      model: "For Graphics Purpose",
    },
    {
      name: "Macbook Air M1 chip",
      price: 400,
      model: "programming laptop",
    },
    {
      name: "MacBook Pro verision M2",
      price: 221,
      model: "programming laptop",
    },
  ]);
  if (result.acknowledged === true) {
    console.log("Data Inserted SUccessfully");
  }
};

InsertData();
