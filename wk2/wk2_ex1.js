/*
console.log("Hello World!");

// The name of the directory that the currently executing script resides in

console.log(__dirname);

//The filename of the code being executed.
console.log(__filename);

//setTimeout(): execute a piece of code (function) after a certain delay.
setTimeout(function(){
    console.log("hello after 1 second.");
},1000);
console.log("Happy day!");
*/

//setInterval(): execute a function after a certain delay and continue to call it repeatedly
/*var count = 1;
var maxCount = 5;
var myCountInterval = setInterval(function(){
    console.log("Hello after "+ (count++) + " second(s)");
    checkMaximum();
}, 1000);

//need to call clearInterval() with the timeout object (e.g., myCountInterval) as a parameter to halt the interval
var checkMaximum = function(){
    if (count> maxCount)
        { clearInterval(myCountInterval);}
}
*/
/* read from user's input */
// require() readline module

var readline=require('readline');
//createInterface() for input/output
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* rl.question(query, callback)
   displays the query by writing it to the output, waits for user input to be provided on input, 
   then invokes the callback function passing the provided input as the first argument.
*/

rl.question("enter your name: ", function(answer){
    console.log("hello " + answer);
    // the Interface is closed because it waits for data to be received on the input stream.
    rl.close();
});

