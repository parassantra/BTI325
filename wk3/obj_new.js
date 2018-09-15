function Teacher(sName, sAge){
    this.name = sName;
    this.age = sAge;
    this.occupation = "teacher";
}

var teacher1 = new Teacher("Joe", 34);
var teacher2 = new Teacher("Mary", 46);
var teacher3 = new Teacher("Varshan",18);
var teacher4 = new Teacher("Hanlin", 18);
var teacher5 = new Teacher("Julian", 20);

Teacher.prototype.setName = function(newName){this.name = newName;};
Teacher.prototype.setAge = function(newAge){this.age = newAge;};
Teacher.prototype.getName=function(){return this.name;};
Teacher.prototype.getAge=function(){return this.age;};
Teacher.prototype.setOc=function(){this.occupation = "prof"}
Teacher.prototype.getOc=function(){return this.occupation};

console.log(teacher1.getName());
console.log(teacher2.getAge());
/*
teacher2.setAge(49);
console.log(teacher2.getAge());
teacher2.setOc();
console.log(teacher2.getOc());
console.log("*****");
console.log(teacher1.getOc());
*/
// check teacher2 prototype
//console.log(teacher2);
//console.log(Object.getPrototypeOf(teacher2));
 //console.log(teacher2.newMethod());// error newMethod() is not a function
/*
Teacher.prototype.newMethod = function(){
   //return "Hello";
    return "Hello: " + this.name;
};

console.log(teacher2.getName());
console.log(teacher2.newMethod()); // outputs: Hello: Mary
console.log(Object.getPrototypeOf(teacher2));
*/