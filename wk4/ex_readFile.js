const fs = require('fs');

fs.readFile('./departments.json',(err,data)=>{
    if (err) throw err;
    let departments = [];
    departments = JSON.parse(data);
    console.log(departments);
});
