const express = require("express");
const exphbs = require('express-handlebars');
const HTTP_PORT = process.env.HTTP_PORT || 8080;

const app = express();

//call this function after the http server starts listening for requests
function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

/* handle HTML files that are formatted using handlebars
   tell server that any file with '.hbs' (instead of '.html') 
   will use handlebar "engine" (template engine)
*/
// partialsDir: “some/path/to/partials” . if it's not under ./views/partials
//layoutsDir: “some/path/to/layouts”. if it's not under ./views/layouts
app.engine(".hbs", exphbs(
    {extname:'.hbs',
    /* specify property partialDir, if it's not under ./views/partials */
   // partialsDir: "./views", 
    helpers: {
        mark: function(options){
            return '<mark>' + options.fn(this) + '</mark>'; 
        },// mark
        list: function(context, options){
            var ret = "<ul>";
            for (var i=0; i< context.length; i++){
                ret = ret + "<li>" + options.fn(context[i]) + "</li>";
            }
            return ret+"</ul>";
        }// list
    },// helpers
    defaultLayout: 'main'
}));// app.engine()
app.set('view engine', '.hbs');

//home route
app.get("/", (req,res)=>{
    res.send("Home page. go /viewData.");
});

// update route "/viewData" to "render" handlebars file with data
app.get("/viewData", (req,res)=>{
    var someData = { name: "John", age: 23, occupation: "developer", company:"TD Bank",
                      visible: false, contract: false};
    
    var arrayData = [
        {name: "John", age: 23, occupation: "developer", company:"TD Bank"},
        {name: "Sarah", age: 42, occupation: "manager", company:"TD Bank"}
         ];
    /* "render" handlebars file (viewData.hbs) with data, not res.send() */
   // res.render('viewData', {data: someData});
    
    /* render data with helper #if, #unless  */
    res.render('viewData_if', {data: someData});
   
   /* render array data with #each helper */
  // res.render('viewData_arr',{data: arrayData});
});

//start the server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);

