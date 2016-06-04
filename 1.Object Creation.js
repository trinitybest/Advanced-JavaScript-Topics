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




