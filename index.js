const express = require("express");
const {mongoose} = require("mongoose");

const{userRouter} = require("./route/user");
const{courseRouter} = require("./route/course");
const{adminRouter} = require("./route/admin");

const app = express();

app.use("/user",userRouter);
app.use("/course",courseRouter)
app.use("/admin",adminRouter);

async function main(){
    await mongoose.connect("mongodb+srv://mmanav10:Ramayan123@cluster0.nordt.mongodb.net/week8app")
    app.listen(3000,()=>{
        console.log("The server has started on port 3000")
    });
}

main()
