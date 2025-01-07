const express = require("express");

const app = express();
app.post("/user/signup",function(req,res){
    res.json({
        message:"ignUp EndPoint"
    })
})
app.post("/user/signin",function(req,res){
    res.json({
        message:"Sign in Endpoint"
    })
})
app.get("/user/purchase",function(req,res){
    res.json({
        message: "These are the course purchased by you"

    })
})
app.post("/course/purchase",function(req,res){
    res.json({
        message : "You are going to purchase from these"


    })
})
app.get("/courses",function(req,res){
    res.json({
        message:"List of availble courses"
    })
})



app.listen(3000);
