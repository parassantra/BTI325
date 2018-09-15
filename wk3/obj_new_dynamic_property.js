function Teacher(sName, sAge){
    this.name = sName;
    this.age = sAge;
    this.occupation = "teacher";
}


// Teacher.prototype.newProp = "Dynamic Property";
var teacher1 = new Teacher("Joe", 34);
var teacher2 = new Teacher("Mary", 46);

//even OK when add after the obj is created
Teacher.prototype.newProp = "Dynamic Property";
console.log(teacher1.newProp);

Teacher.prototype.setName = function(newName){this.name = newName;};
Teacher.prototype.setAge = function(newAge){this.age = newAge;};
Teacher.prototype.getName=function(){return this.name;};
Teacher.prototype.getAge=function(){return this.age;};
Teacher.prototype.setOc=function(){this.occupation = "prof"}
Teacher.prototype.getOc=function(){return this.occupation};

//Teacher.prototype.getOc=function(){return this.__proto__.occupation};
// add a new property occupation2
//Teacher.prototype.occupation2="professor";
Teacher.prototype.getOc2=function(){return this.occupation2};
console.log("&&&&<<<");
console.log(teacher1.getOc());
//even add later, will be able to get by tracing the prototype
Teacher.prototype.occupation2="professor";
console.log(teacher1.getOc2());
Teacher.prototype.occupation2="new Professor";
console.log(teacher1.getOc2());
console.log(">>>&&&&");

console.log(teacher1.getName());
console.log(teacher2.getAge());
teacher2.setAge(49);
console.log(teacher2.getAge());
teacher2.setOc();
console.log(teacher2.getOc());
console.log("*****");
console.log(teacher1.getOc());

// check teacher2 prototype
console.log("check teacher2 prototype");
console.log(teacher2);
console.log(Object.getPrototypeOf(teacher2));
//console.log(Object.getPrototypeOf(Teacher));

Teacher.prototype.newMethod = function(){
   //return "Hello";
    return "Hello: " + this.name;
};
//console.log(teacher2.getName());
//console.log(teacher2.newMethod()); // outputs: Hello: Mary
