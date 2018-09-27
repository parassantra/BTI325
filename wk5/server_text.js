//setup our requires
const express = require("express");
const app = express();
const path = require("path");

//add "body-parser" dependency to handle regular text submission
const bodyParser = require("body-parser");

const HTTP_PORT = process.env.PORT||8080;

//call this function afte the http server starts listening for requests
function onHttpStart(){
    console.log("Express http server listening on: "+HTTP_PORT);
}

/* handle only text form data
   bodyParser.urlencoded(options)
   parses the text as URL encoded data (which is how browsers tend to send form data from rergular forms set to POST)
   and exposes the resulting object (containing the keys and values) on req.body
    
   if parameter {extended:false}, it cannot post "nested object"
   e.g., nested object = {person:{name:cw}}

   if {extended:true}, you can do whatever way you like.
   */
app.use(bodyParser.urlencoded({extended: true}));

/* bodyParser.json(options) 
    parses the text as JSON and exposes the resulting object on req.body
*/
//app.use(bodyParser.json());

/* setup a route on the 'root' of the url that has our form 
   IE: http:/localhost/
*/
app.get("/", (req, res)=>{
    //send the html view with our form to the client
    res.sendFile(path.join(__dirname, "/views/registerUser_text.html"));
});

/* now add a route that we can POST the form data to
    IE: http://localhost/register-user*/
app.post("/register-user", (req,res)=>{
    const textValue = "Your Name is: "+ req.body.name +"<br>"+
                      "Your userName is: " + req.body.username + "<br>" +
                      "Your password is: " + req.body.password +"<br>" +
                      "Your email is: " + req.body.email + "<br>";
    res.send(textValue);
   // res.json({message:textValue});
});

app.listen(HTTP_PORT, onHttpStart);