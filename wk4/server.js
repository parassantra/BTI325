//wk4
const express = require("express");
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
const path = require("path");
// call this function when server starts
function onHttpStart(){
    console.log("Express http server listening on: "+HTTP_PORT);
}

app.use(express.static("./public/images"));
//app.use(express.static("./public"));

//route "/"
app.get("/",(req,res)=>{
    res.send("<h3 style='color:red;'>Welcome</h3> <br>"+
            "check <a href = '/headers'> Headers </a>");
});

//route /headers
app.get("/headers",(req,res)=>{
   // const headers = req.headers;
    res.send(req.headers);
});

//req.params
//url like: http://localhost:8080/userName/Jack
app.get("/userName/:userName",(req,res)=>{
    res.send("User Name is: "+ req.params.userName);
});

//req.query
// url like: http://localhost:8080/userId?userId=9
app.get("/userId",(req,res)=>{
   res.send("User ID is: "+ req.query.userId);
   //res.send("ID");
});
//all other routes
app.use((req,res)=>{
    res.status(404).send("Page Not Found");
});

app.listen(HTTP_PORT, onHttpStart);
