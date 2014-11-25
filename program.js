var http = require("http");
var urls = [];

var httpGetQueue = function(url){
  if(!url){
    return 0
  }

  http.get(url, function(response){
    var contents = "";
    response.setEncoding("utf8");
    response.on('data', function(chunk){
      contents += chunk;
    });
    response.on('end', function(){
      console.log(contents);
      httpGetQueue(urls.shift());
    });
  });
};

urls = process.argv.slice(2);

httpGetQueue(urls.shift());
