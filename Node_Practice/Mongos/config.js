const mongoose = require("mongoose");
const options = require("../Helper/ConnectionOption");
// Connecting the Mongo Db
mongoose.connect("mongodb://localhost:27017/e-comdb", options);
