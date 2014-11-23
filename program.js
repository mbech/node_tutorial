var fs = require('fs');
var filepath = process.argv[2];
var extension = process.argv[3];

fs.readdir(filepath, function (err, fileNameArray){
  var extRegex = new RegExp("^.+\." + extension + "$");
  var filteredNameArray = fileNameArray.filter(function(element){
    return extRegex.test(element);
  });
  console.log(filteredNameArray.join("\n"));
});


