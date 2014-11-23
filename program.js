var myModule = require("./my_module.js");

myModule(process.argv[2], process.argv[3], function (err, data) {
  if (err) return console.log(err);
  console.log(data.join("\n"));
});
