var fs = require('fs');

fs.readFile(process.argv[2], function (err, fileContents){
  var textBuffer = fileContents.toString();
  console.log(textBuffer.split('\n').length - 1);
});


