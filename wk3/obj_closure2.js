function architect(setName, setAge){
    var name = setName;
    var age = setAge;
    var occupation = "architect";
    return {
      setName: function(newName){name = newName},
      setAge: function(newAge){age = newAge},
      getName: function(){return name},
      getAge: function(){return age}
    }
  }
  
  var architect1 = architect("Joe", 34);
  var architect2 = architect("Mary", 49);
  
  console.log(architect1.name); // undefined
  
  console.log(architect1.getName()); // "Joe"
  console.log(architect2.getName()); // "Mary"