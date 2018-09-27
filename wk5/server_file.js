//setup our requires
const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");


const HTTP_PORT = process.env.PORT||8080;

//call this function afte the http server starts listening for requests
function onHttpStart(){
    console.log("Express http server listening on: "+HTTP_PORT);
}
//reference: https://github.com/expressjs/multer 
//multer requires a few options to be setup to store files with file extensions
// by default it won't store extensions for security reasons
const storage2 = multer.diskStorage({
    destination: "./public/photos/",
    filename: function(req, file, cb){
      /* we write the filename as the current date down to the millisecond
         in a large web service, this would possibly cause a problem if two people
         uploaded an image at the exact same time.
         A bette way would be to use GUID's for filenames
         this is a simple example. 
      */
      cb(null, Date.now()+ path.extname(file.originalname));
    }
})
//tell multer to use the diskStoage function for naming files instead of the default
const upload = multer({storage:storage2});  //tells Multer where to upload the files

// setup the static folder that static resources can load from 
// we need this so that the photo can be loaded from the server
// by the browser after sending it
app.use(express.static("./public/"));

/* setup a route on the 'root' of the url that has our form 
   i.e.: http:/localhost:8080
*/
app.get("/", (req, res)=>{
    //send the html view with our form to the client
    res.sendFile(path.join(__dirname, "/views/registerUser_file.html"));
});

/* now add a route that we can POST the form data to
    i.e.: http://localhost:8080/register-user
    add the middleware function (upload.single("photo")) for multer to process the file upload in the form
    the string you pass the single() function is the value of the 
    'name' attribute on the form for the file input element
*/
app.post("/register-user",upload.single("photo"),(req,res)=>{
   // app.get("/register-user",(req,res)=>{
   // res.send("Register");
   const formData = req.body;
   const formFile = req.file;
   const dataReceived = "Your submission was received: <br> <br>" +
        "Your form data was: <br>" + JSON.stringify(formData) + "<br> <br>" +
        "Your File data was: <br>" + JSON.stringify(formFile) + "<br> <br>" +
        "<p style='color:red;'> Your name is: " + formData.name + "</p> <br>"+
        "<br> <p> This is the image you sent: <br> "+
        "<img src = '/photos/"+ formFile.filename +"' width=200 height =300/>";
        res.send(dataReceived);
        
});

app.listen(HTTP_PORT, onHttpStart);