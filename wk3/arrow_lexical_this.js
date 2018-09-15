/* Lexical Scoping (static scope) defines how variable names are resolved in nested functions: 
inner functions contain the scope of parent functions even if the parent function has returned. */
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
//console.log(teacher1.getName());
//console.log(teacher2.getAge());

/* this_delay.js */
/*
Teacher.prototype.outputNameDelay = function(){
    //var that = this;
    setTimeout(function(){
        console.log(this.name); // undefined
       // console.log(that.name); // works
    },1000);
}
*/


Teacher.prototype.outputNameDelay = function(){
    setTimeout(() => { console.log(this.name); }, 1000);  // lexical this works, no that
  };


teacher2.outputNameDelay();