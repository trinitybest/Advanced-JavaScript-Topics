/*
var obj = function(){
	this.i = 0;
  
  this.add = function(i){
  	this.i += i;
  };
  this.substract = function(i){
  	this.i -= i;
  };
  this.print = function(){
  	console.log(this.i);
  };
};
var x = new obj();
x.add(3);
x.substract(2);
x.print();
*/

var obj = function(){
	var i = 0;
  
  var add = function(j){
  	i += j;
    return this;
  };
  var substract = function(j){
  	i -= j;
    return this;
  };
  var print = function(){
  	console.log(i);
  };
  return {add: add, substract: substract, print: print};
};

var x = obj();
x.add(3).substract(2).print();
console.log(x);





