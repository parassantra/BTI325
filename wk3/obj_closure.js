/* simple objects with only functions, no data, better to use new(constructo()) */
function teacher(sName, sAge){
    var name = sName;
    var age = sAge;
    var occupation = "teacher";
    return {
        setName: function(newName){name = newName;},
        setAge: function(newAge) {age = newAge;},
        getName: function(){return name;},
        getAge: function(){return age;}
    }
}
//var teacher1 = teacher("Joe", 34); // ok,call function
var teacher1 = new teacher("Joe",34); // ok, create obj
//var teacher1 = Object.create(teacher);  //error: require "teacher" is an object prototype, now is a function
var teacher2 = teacher("Mary", 46);

console.log(teacher1.name); // undefined
console.log(teacher1.getName()); // Joe
console.log(teacher2.getAge()); // 46
teacher2.setAge(49);
console.log(teacher2.getAge()); // 49

console.log(Object.getPrototypeOf(teacher1));// {}
console.log(teacher1);  // object with 4 functions {setName:[Function: setName],...}
