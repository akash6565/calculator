//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(res, req){
    res.sendFile(path.resolve('src', 'app', 'index.html'));
});

app.post("/", function(res, req){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;

    req.send("The result of the calculator is :" + result);
});

app.listen(3000,function(){
    console.log("server, is responding ...");
});