//For routing all the endpoint starting with user
const express = require("express");
const Router = express.Router;
// const {Router} = require("express")

const userRouter = Router();
//Router in not a class but instead a function , provided by express Library


userRouter.post("/signup",function(req,res){
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
        message: "These are the course purchased by you"

    })
})
module.exports = {
    userRouter:userRouter
}
