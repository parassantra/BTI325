function outputA(){
    var randomTime = Math.floor(Math.random()*3000) +1;
    return new Promise(function(resolve, reject){
        setTimeout(function(){
          console.log("-");
          //resolve("outputA resolved."); // go to "then" to execute outputB & C
          reject("reason: outputA rejected!!!");   // rejected, go to "catch",display the "reason"
        }, randomTime);
    });
}

function outputB(data){
    var randomTime = Math.floor(Math.random()*3000)+1;
    setTimeout(function(){
        console.log("B");
        console.log("output some data: " + data);
    },randomTime);
}

function outputC(){
    var randomTime = Math.floor(Math.random()*3000) +1;
    setTimeout(function(){
        console.log("C");
    },randomTime);
}

/*outputA();
outputB();
outputC();*/

//always outputs A first, B, C still random
outputA().then(function(data){
    console.log("OutputA resolved.");
    var data = "some data...";
    console.log(data);
    outputB(data);
    outputC();    
})
.catch(function(reason){
    console.log(reason);
});
