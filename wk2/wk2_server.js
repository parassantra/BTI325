//require express module
var express = require("express"); 
//create application (app)
var app = express();
//you can create more applications
// var app2 = express1();

//require path module to use directory
var path = require("path");

//define variable for port
var HTTP_PORT = process.env.PORT ||8080;

//call this function after the http server starts listening for requests
function onHttpStart(){
    console.log("Express httpserver listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on thedefault url path (http://localhost)
app.get("/", function(req,res){
    res.send("Hello World <br> <a href='/about'> Go to the About page </a>");
});

//setup another route (/about) to listen on 
 /*
 app.get("/about", function(req,res){
    res.send("<h3>About </h3>");
});
*/

app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "/views/about.html"));
})


//setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
