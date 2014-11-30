var portNum = process.argv[2];
var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res){
  var pathName = url.parse(req.url).pathname;
  var query = url.parse(req.url, true).query;
  var queryDate = new Date(query.iso);
  var responseObj = {};
  console.log("here");

  if (pathName === '/api/parsetime'){
    responseObj.hour = queryDate.getHours();
    responseObj.minute = queryDate.getMinutes(); 
    responseObj.second = queryDate.getSeconds(); 
  } else if (pathName === '/api/unixtime'){
    responseObj.unixtime = queryDate.getTime();
  } 
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(responseObj));
});

server.listen(portNum);
