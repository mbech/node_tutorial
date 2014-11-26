var portNum = process.argv[2];
var net = require('net')

var server = net.createServer(function (socket) {
  var date = new Date;

  //Format should be: "YYYY-MM-DD hh:mm"
  var dateStr = date.getFullYear() + "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) + "-" +  // starts at 0
  ("0" + date.getDate()).slice(-2) + " " + 
  ("0" + date.getHours()).slice(-2) + ":" +
  ("0" + date.getMinutes()).slice(-2);

  socket.end(dateStr);
})

server.listen(portNum);
