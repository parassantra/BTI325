const PI = 3.14;
console.log("trying to change PI.");
//PI = 88;
//console.log("Trying to change PI. ");
try {
    PI =88;
} catch (ex){
    console.log("error: " + ex.message);
    console.log("error Name: "+ ex.name);
    //console.log("error stack point: " + ex.stack);
} finally{
     console.log("Do it anyway.");
     console.log(PI);
}

