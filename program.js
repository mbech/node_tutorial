var fs = require('fs');


var filePath = process.argv.slice(2).shift();

var textBuffer = fs.readFileSync(filePath);

console.log(textBuffer.toString().split('\n').length - 1);

