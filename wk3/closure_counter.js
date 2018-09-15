//var localCounter;
function counter()
{
    var localCounter =0;
    //var total =10;
    return function(){
        localCounter++;
        //total += localCounter;
        return localCounter;
      //  return total;
    }
}

var count = counter();

/*console.log(counter()());
console.log(counter()());
console.log(counter()());
console.log(counter()());
*/
console.log(count());
console.log(count());
console.log(count());

//console.log(localCounter);