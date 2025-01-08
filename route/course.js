//Routing . all the routes start with courses are in this File.

const express = require("express");

const courseRouter = express.Router();

courseRouter.post("/purchase",function(req,res){
    res.json({
        message : "You are going to purchase from these"
    })
})
courseRouter.get("/preview",function(req,res){
    res.json({
        message:"List of available courses"
    })
})
module.exports = {
    courseRouter:courseRouter
}

