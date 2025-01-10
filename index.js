const express = require("express");
const {mongoose} = require("mongoose");

const{userRouter} = require("./route/user");
const{courseRouter} = require("./route/course");
const{adminRouter} = require("./route/admin");

const app = express();
app.use(express.json());

app.use("/user",userRouter);
app.use("/course",courseRouter)
app.use("/admin",adminRouter);


async function main(){
    await mongoose.connect("mongodb+srv://mmanav10:Ramayan123@cluster0.nordt.mongodb.net/week8app")
    console.log("DataBase connection has been successfully established")
    app.listen(4000,()=>{
        console.log("The server has started on port 4000")
    });
}
main()
