//let VS var [http://stackoverflow.com/questions/762011/let-keyword-vs-var-keyword]
var add = function(a){
	return function(b){
  	return a+b;
  }
}
var addToFive = add(5); 
console.log(addToFive(1));

// Get the average of n arguments
var avg = function(...n){//n arguments
	let tot=0;
  for(let i=0; i<n.length; i+=1){
  	tot += n[i];
  }
  return tot/n.length;
}
// Calcualte the avg of n+m arguments
var spiceUp = function(fn, ...n){
	return function(...m){
  	return fn.apply(this, n.concat(m));
  }
}

var doAvg = spiceUp(avg, 1,2,3);
//console.dir(doAvg);
console.log(doAvg(4, 5, 6));

var sayWhat = function(a){
	return function(b){
  	return function(c){
    	console.log("saying " + a + " to " + b + " using " +c);
    }
  }
};

sayWhat('hi')('me')('nothing');

