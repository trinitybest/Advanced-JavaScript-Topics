// Example for a simple call back function

let  x = function(){
	console.log("I am called from inside of a function.");
}

let y = function(callback){
	console.log("do something.");
  callback();
}

y(x);

let add = function(a, b){
	return a+b;
};
let multiply = function(a, b){
	return a*b;
};
let doWhatever = function(a, b){
	console.log('here are your two numbers back',a,b);
};

let calc = function(num1, num2, callback){
	if (typeof callback === "function"){
  	return callback(num1, num2);
  }
	
}

console.log(calc(2,3, add));
console.log(calc(2,3, multiply));
console.log(calc(2,3, doWhatever));
console.log(calc(2,3, function(a, b) {
	return a - b;
}));
