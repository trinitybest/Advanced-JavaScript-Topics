//let VS var [http://stackoverflow.com/questions/762011/let-keyword-vs-var-keyword]
var add = function(a){
	return function(b){
  	return a+b;
  }
}
var addToFive = add(5); 
console.log(addToFive(1));
