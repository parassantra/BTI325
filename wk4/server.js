//wk4
const express = require("express");
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
const path = require("path");
// call this function when server starts
function onHttpStart(){
    console.log("Express http server listening on: "+HTTP_PORT);
}

//http://localhost:8080/dog.png
//app.use(express.static("./public/images"));

//http://localhost:8080/images/dog.png
app.use(express.static("./public"));

//route /headers
app.get("/headers",(req,res)=>{
    // const headers = req.headers;
     res.send(req.headers);
 });

//route "/"
app.get("/",(req,res)=>{
    res.send("<h3 style='color:red;'>Welcome</h3> <br>"+
            "check <a href = '/headers'> Headers </a>");
});



//req.params
//url like: http://localhost:8080/userName/Jack
/*
app.get("/userName/:userName",(req,res)=>{
    res.send("User Name is: "+ req.params.userName);
});
*/

//url like: http://localhost:8080/userName/Jack/6
app.get("/userName/:userName/:id",(req,res)=>{
    res.send("User Name is: "+ req.params.userName +", id: " + req.params.id);
});


//req.query
// url like: http://localhost:8080/userId?userId=9
app.get("/userId",(req,res)=>{
   res.send("User ID is: "+ req.query.userId);
   //res.send("ID");
});

/*
///multiple functions, use next()
app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id)
    next()
  }, function (req, res, next) {
    res.send('User Info')
  })
*/

//all other routes

app.use((req,res)=>{
    res.status(404).send("Page Not Found");
});

app.listen(HTTP_PORT, onHttpStart);
