var mongoose = require("mongoose");

var schema = mongoose.Schema({
  name : { type : String,  default : "" }
});

module.exports = mongoose.model("User", schema);
