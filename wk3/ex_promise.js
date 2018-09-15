function outputA(){
    var randomTime = Math.floor(Math.random()*3000) +1;
    return new Promise(function(resolve, reject){  // async part in Promise obj as return
        setTimeout(function(){
          console.log("A");
          resolve("OutputA resolved.");  
        }, randomTime);
    });
}

function outputB(){
    var randomTime = Math.floor(Math.random()*3000)+1;
        setTimeout(function(){
            console.log("B");
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
    
    console.log(data);
    outputB();
    outputC();    
});
