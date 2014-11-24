var http = require("http");

var requestUrl = process.argv[2];

var callback = function(response){
  var str = "";
  response.on('data', function(responseChunk){
    str += responseChunk + "\n";
  });
  response.on('end', function(){
    console.log(str);
  });
  response.on('error', function(){
    console.log("something went terribly wrong...");
  });
}

http.get(requestUrl, callback);


