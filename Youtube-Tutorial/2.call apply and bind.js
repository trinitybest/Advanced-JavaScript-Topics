var obj = {num:2};

var addToThis = function(a, b, c){
	return this.num + a + b + c;
};
var arr = [1,2,3];//could be used on apply, but could not be used for bind.
var bound = addToThis.bind(obj);
console.log(bound(1, 2, 3));
//pseudo code
var functionName = function(arg1, arg2, arg3){

};
functionName.call(obj, arg1, arg2, arg3);
functionName.apply(obj, [arg1, arg2, arg3]);
var bound = functionName.bind(obj);
bound(arg1, arg2, arg3);

