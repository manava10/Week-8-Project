const express = require("express");

const{userRouter} = require("./route/user");
const{courseRouter} = require("./route/course");

const app = express();

app.use("/user",userRouter);
app.use("/course",courseRouter)

app.listen(3000,()=>{
    console.log("Server is running on the PORT 3000")
});
