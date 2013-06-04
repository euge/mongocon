var fs       = require('fs'),
    replLib  = require('repl'),
    util     = require("util"),
    sys      = require("sys"),
    mongoose = require("mongoose");

function Mongocon() {}

Mongocon.prototype.start = function(modelPath, persistHistory) {
  var self = this;

  // require model files from modelPath
  this._requireModels(modelPath);

  var repl = this.repl = replLib.start({});

  if (persistHistory) {
    // add persistent history support
    require('repl.history')(repl, process.env.HOME + '/.node_history');
  }

  repl.on('exit', function () {
    process.exit();
  });

  // populate the repl context with models and helpers
  this._populateReplContext(repl.context);

  repl.displayPrompt();
}

Mongocon.prototype._populateReplContext = function(context) {
  Object.keys(mongoose.models).forEach(function(k) {
    context[k] = mongoose.models[k];
  });

  var repl = this.repl;

  // add a "$cb" method to the repl's context for capturing data passed to an async callback
  repl.context.$cb = function() {
    sys.puts(repl.writer(arguments))

    // copy over the last result
    repl.context._ = arguments[1];

    // copy over the last error
    repl.context._e = arguments[0];

    repl.displayPrompt();
  };

}

Mongocon.prototype._requireModels = function(modelPath) {
  fs.readdirSync(modelPath).forEach(function(file) {
    require(modelPath + '/' + file);
  });

  return this;
}

module.exports = new Mongocon;
