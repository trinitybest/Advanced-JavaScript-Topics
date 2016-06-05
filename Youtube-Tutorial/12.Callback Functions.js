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
// Using sort function
var myArr = [{
	num:5,
  str: 'apple'
}, {
	num: 7,
  str: 'cabbage'
}, {
	num:1,
  str: 'ban'
}]

myArr.sort(function(val1, val2) {
	if(val1.num > val2.num)
  	return -1;
   else
   	return 1;
})
console.log(myArr);
