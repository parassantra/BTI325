var teacher={
                name: "sunny",
                age: 90,
                occupation:"teacher",        
                setAge: function(age)
                {
                    this.age = age;
                },
                setName: function(name){
                    this.name = name;
                }
            }
var teacher1 = Object.create(teacher);
var teacher2 = Object.create(teacher);
console.log(teacher1.name);
console.log(teacher2.name);

teacher.setOcc= function(occ){
    this.occupation = occ;
}
teacher.phone="123456";

teacher1.name = "Ryan";
//teacher1.occupation = "doctoer";
teacher1.setOcc("doctor");
console.log(teacher1.name);
console.log(teacher2.name);
console.log(teacher1.occupation);
console.log(teacher1.phone);

/*
teacher1.setName("Ron");
console.log(teacher1.name);
console.log(teacher2.name);
*/