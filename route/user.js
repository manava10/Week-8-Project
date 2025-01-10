//For routing all the endpoint starting with user
const express = require("express");
const userRouter = express.Router();

const {userModel} = require("../db");
//Router in not a class but instead a function , provided by express Library



userRouter.post("/signup",async function(req,res){
    /* This code snippet is handling the logic for the "signup" endpoint in a user router. Here's a
    breakdown of what it does: */
    const {email ,password ,firstName , lastName  } = req.body;//add zod validation 
    // and have to add bcrypt

    //Have to put inside a try catch block 
    await userModel.create({
        email:email,
        password : password,
        firstName : firstName,
        lastName : lastName
    })
    res.json({
        message:"SignUp EndPoint"
    })
})
userRouter.post("/signin",function(req,res){
    res.json({
        message:"Sign in Endpoint"
    })
})
userRouter.get("/purchase",function(req,res){
    res.json({
        message: "These are the course purchased by you, This is all of your courses"

    })
})
module.exports = {
    userRouter:userRouter
}
