var mongoose = require("mongoose");

var schema = mongoose.Schema({
  title : { type : String,  default : "" }
});

module.exports = mongoose.model("Post", schema);
