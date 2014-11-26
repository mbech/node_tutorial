var http = require("http");
var urls = [];
var results = [];
var count = 0;

var httpGetQueue = function(index){
  var url = urls[index];
  http.get(url, function(response){
    var contents = "";
    response.setEncoding("utf8");
    response.on('data', function(chunk){
      contents += chunk;
    });
    response.on('end', function(){
      results[index] = contents;
      count += 1;
      if(count === urls.length ){
        console.log(results.join("\n"));
      }
    });
  });
};

urls = process.argv.slice(2);
var len = urls.length;

for(var i = 0; i < len; i++){
  httpGetQueue(i);
}

