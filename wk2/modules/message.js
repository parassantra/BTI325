// a local function that cannot be accessed from other modules
var localFunction = function(){
    var n =10;
    console.log(n);
}
//export function writeMessage() so that it is accessible while required this module. 
var localMessage = "";
module.exports.writeMessage = function(msg){
    localMessage = msg;
}

module.exports.readMessage = function(){
    console.log(localMessage + " from " + __filename);
}
