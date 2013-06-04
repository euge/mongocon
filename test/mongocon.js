var expect   = require("chai").expect;
var mongoose = require("mongoose");

describe("mongocon", function() {

  var mongocon = require("../mongocon");

  it("should require models", function() {
    expect(mongoose.models).to.be.empty;
    mongocon.start(__dirname + "/../examples/models", false);

    expect(mongoose.models).to.not.be.empty;
    expect(mongoose.models).to.have.keys("Post", "User");
  });

  it("should populate the context", function() {
    expect(mongocon.repl.context.Post).to.exist;
    expect(mongocon.repl.context.User).to.exist;
    expect(mongocon.repl.context.$cb).to.exist;
  });

});