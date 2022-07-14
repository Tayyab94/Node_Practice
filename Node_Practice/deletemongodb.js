const Db_Connection = require("./mongoconnection");

const DeleteData = async () => {
  let coll = await Db_Connection();
  let result = await coll.deleteOne({ name: "Samsung g11" });

  // DeleteCount tells us that, Data has been deleted or not?
  if (result.acknowledged && result.deletedCount > 0) {
    console.log("Record Deleted");
  }
};

DeleteData();
