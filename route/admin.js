const express = require("express")

const adminRouter = express.Router();

const {adminModel} = require("../db");

adminRouter.post("/signup",(req,res)=>{
    res.json({
        message:"Admin signUp Route"
    })
})

adminRouter.post("/login",(req,res)=>{
    res.json({
        message:"Admin login Router"
    })
})

//Admin can create a course . To create a course admin must be signed in before

adminRouter.post("/course",(req,res)=>{
    res.json({
        message:"This Routes is for admin to create a course"
    })
})
adminRouter.put("/course",(req,res)=>{
    res.json({
        message : "This route is to change the price of courses"
        
    })
    
})
adminRouter.get("/course/bulk",(req,res)=>{
    res.json({
        message:"This endpoint is to Retrieve all the courses created by admin "
    })
})


module.exports = {
    adminRouter:adminRouter

}