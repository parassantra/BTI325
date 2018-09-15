function Teacher(sName, sAge){
    this.name = sName;
    this.age = sAge;
    this.occupation = "teacher";
}

Teacher.prototype.setName = function(newName){this.name = newName;};
Teacher.prototype.setAge = function(newAge){this.age = newAge;};
Teacher.prototype.getName=function(){return this.name;};
Teacher.prototype.getAge=function(){return this.age;};

var teacher1 = new Teacher("Joe", 34);
var teacher2 = new Teacher("Mary", 46);
console.log(teacher1.getName());
console.log(teacher2.getAge());

Teacher.prototype.outputNameDelay = function(){
    //var that = this;
    setTimeout(function(){
        console.log(this.name);
       // console.log(that.name);
    },1000);
}

teacher2.outputNameDelay(); // undefined
//console.log(teacher2);
/*Teacher { name: 'Mary', age: 46, occupation: 'teacher' }*/
//console.log(Object.getPrototypeOf(teacher2));
/*
Teacher {
  setName: [Function],
  setAge: [Function],
  getName: [Function],
  getAge: [Function],
  outputNameDelay: [Function] }
*/
//console.log(Teacher.prototype.isPrototypeOf(teacher2));// true

// add new method after objects teacher1, teacher2 were created
/*
Teacher.prototype.newMethod = function(){
   return "Hello: "+ this.name;
}
console.log(teacher2.newMethod());
*/
