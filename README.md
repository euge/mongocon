What is it?
===========

mongocon enhances the default node REPL with preloading of mongoose models and ability to capture data from async callbacks. It also is able to persist a history of previously run commands in a ~/.node_history file.

How do I use it?
================
Install with ```npm install mongocon```

In a file of your choosing, simply require mongocon and call start. The start method has the following signature:

```javascript
// modelsPath - path of all mongoose models to be required
// persistHistory - should command history be persisted to a file?
function start(modelsPath, persistHistory)
```

Example:

```javascript
var mongocon = require("mongocon");

// start the mongo console, loading models from the "models" folder and persisting the command history
mongocon.start(__dirname + "/models", true);
```

Thanks
======
[ mongooser ](https://github.com/aheckmann/mongooser) for the inspiration.

