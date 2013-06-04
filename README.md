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

Example file:

```javascript
var mongocon = require("mongocon");

// start the mongo console, loading models from the "models" folder and persisting the command history
mongocon.start(__dirname + "/models", true);
```

Now in the repl, your models are available to be used. A special ```$cb``` function is also defined which will help in displaying and interrogating results
from an async callback.

For example:

```javascript
User.find({}, $cb);
```

As soon as the query results are available, the ```$cb``` callback will be executed and printed to the screen. The repl's standard variable ```_``` will then reference the 
last received results, while ```_e``` will reference the last error.

Thanks
======
[ mongooser ](https://github.com/aheckmann/mongooser) for the inspiration.

