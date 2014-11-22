var fs = require('fs');

var textBuffer = fs.readFileSync(process.argv[2]).toString();

console.log(textBuffer.split('\n').length - 1);

