var mongoose = require("mongoose");
var mongocon = require("../mongocon");

// connect to the db
mongoose.connect("mongodb://localhost/demo");

// start the mongo console
mongocon.start(__dirname + "/models", true);
