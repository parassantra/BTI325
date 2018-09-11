// require a user-defined module 
var message = require("./modules/message.js");

// execute function writeMessage(), which is in the above user-defined module (already required)
message.writeMessage("Hello ");
message.readMessage();

//localFunction() was not exported in the user-defined module, so it's not accessible here. 
message.localFunction(); //TypeError: message.localFunction is not a function