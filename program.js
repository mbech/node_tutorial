var http = require("http");

http.get(process.argv[2], function(response){
  var contents = "";
  response.setEncoding("utf8");
  response.on('data', function(chunk){
    contents += chunk;
  });
  response.on('end', function(){
    console.log(contents.length);
    console.log(contents);
  });
});


