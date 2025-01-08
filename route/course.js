//Routing . all the routes start with courses are in this File.

const express = require("express");
const Router = express.Router;
//The above two line can also be written as 
//const {Router} = require("express");

const courseRouter = Router();

courseRouter.post("/course/purchase",function(req,res){
    res.json({
        message : "You are going to purchase from these"


    })
})
courseRouter.get("/courses/preview",function(req,res){
    res.json({
        message:"List of available courses"
    })
})






module.exports = {
    courseRouter:courseRouter
}

