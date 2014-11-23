module.exports = function(filepath, extension, callback){
  var fs = require('fs');

  fs.readdir(filepath, function (err, fileNameArray){
    if(err){
      return callback(err);
    }
    var extRegex = new RegExp("^.+\." + extension + "$");
    var filteredNameArray = fileNameArray.filter(function(element){
      return extRegex.test(element);
    });
    callback(null, filteredNameArray);
  });
};
