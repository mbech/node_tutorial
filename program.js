var numArray = process.argv.slice(2);

var result = numArray.reduce(function(a,b){
  return +a + +b;
});

console.log(result);
