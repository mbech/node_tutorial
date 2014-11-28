var portNum = process.argv[2];
var filePath = process.argv[3];
var http = require('http');
var fs = require('fs');

var filestream = fs.createReadStream(filePath);

var server = http.createServer(function (req, res){
  filestream.pipe(res);
});

server.listen(portNum);
