const Db_Connection = require("./mongoconnection");

const updateData = async () => {
  let data = await Db_Connection();

  let result = await data.updateOne(
    { name: "HP 1040 G3" },
    { $set: { name: "HP G3 1040 Pro", price: 300 } }
  );
  if (result.acknowledged) {
    console.log("Data has been Updated");
  }
};

updateData();
