var x = function(){
	this.i = 1;
  setTimeout(() => {this.i++;
  console.log(this.i);},1);
};

var xx = new x();
