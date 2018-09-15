//iife: Immediately Invoked Function Expression
//declare an anonymous function & immediately invoke it
(function(){
    var x = 5;
    console.log(x); //5
})();
//console.log(x);
let x = 10;
console.log(x);
console.log("KKKK");
(function(){
    console.log("inside: "+ x);
})();