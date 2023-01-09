
const express=require("express");

const app=express();

app.get('/api/main',function(resq,res){
    
    res.send("Hello Buddy");

}).listen(4000)