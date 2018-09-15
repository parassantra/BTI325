class Teacher{
constructor(sName, sAge){
    this.name = sName;
    this.age = sAge;
    this.occupation = "teacher";
}

setName(newName){this.name = newName;};
setAge(newAge){this.age = newAge;};
getName(){return this.name;};
getAge(){return this.age;};
setOc(){this.occupation = "prof"}
getOc(){return this.occupation};
}

var teacher1 = new Teacher("Joe", 34);
var teacher2 = new Teacher("Mary", 46);

console.log(teacher1.getName());
console.log(teacher2.getAge());

teacher2.setAge(49);
console.log(teacher2.getAge());
teacher2.setOc();
console.log(teacher2.getOc());
console.log("*****");
console.log(teacher1.getOc());