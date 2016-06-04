var peopleFactory = function(name, age, state){
	var temp = {};
  
  temp.age = age;
  temp.name = name;
  temp.state = state;
  
  temp.printPerson = function(){
  	console.log(this.name + ", " + this.age + ", " + this.state);
  }
  
  return temp;
};

var person1 = peopleFactory('John', 23, 'CA');
var person2 = peopleFactory('Kim', 27, 'SC');
//document.write(person1);
person1.printPerson();
person2.printPerson();

// using prototype
var peopleProto = function(){

};
//set default values
peopleProto.prototype.name = "no name";
peopleProto.prototype.age = 0;
peopleProto.prototype.city = "no city";

peopleProto.prototype.printPerson = function(){
	console.log(this.name + ", " + this.age + ", " + this.state);
}

var person1 = new peopleProto();
person1.name = 'John';
person1.age = 23;
person1.city = 'CA';

person1.printPerson();
//this will work if name property is in prototype or is in person1
console.log('name' in person1);
//this will only work if name property is in person1
console.log(person1.hasOwnProperty('name'));
//console.dir(peopleProto);

//dynamic prototype
var peopleDynamicProto = function(name, age, state){
	this.age = age;
  this.name = name;
  this.state = state;
  if(typeof this.printPerson !== 'function') {
  	peopleDynamicProto.prototype.printPerson = function(){
		console.log(this.name + ", " + this.age + ", " + this.state);
		}
  }
};
var person1 = new peopleDynamicProto('John', 23, 'CA');
console.log('name' in person1);
console.log(person1.hasOwnProperty('name'));




