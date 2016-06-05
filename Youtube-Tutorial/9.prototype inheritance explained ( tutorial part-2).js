//base class
var Job = function(){
	this.pays = true;
};
//prototype method
Job.prototype.print = function(){
	console.log(this.pays? "Please hire me." : "No thank you.");
};
//subclass
var TechJob = function(title, pays){
	Job.call(this);
  this.title = title;
  this.pays = pays;
};

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;

TechJob.prototype.print = function(){
	console.log(this.pays? "TechJob, Please hire me." : "TechJob, No thank you.");
};
var softwarePosition = new TechJob("JavaScript Developer", true);
var softwarePosition2 = new TechJob("VB Developer", false);

console.log(softwarePosition.print());
console.log(softwarePosition2.print());


