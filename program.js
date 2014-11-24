var http = require("http");

http.get(process.argv[2], function(response){
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

});


