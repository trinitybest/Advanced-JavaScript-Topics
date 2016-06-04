// Example for a simple call back function

let  x = function(){
	console.log("I am called from inside of a function.");
}

let y = function(callback){
	console.log("do something.");
  callback();
}

y(x);
