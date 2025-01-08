const express = require("express");

const{userRouter} = require("./route/course");
const{courseRouter} = require("./route/user");

const app = express();

app.use("/user",userRouter);
app.use("/course",courseRouter)

createCourseRoutes(app);
createCourseRoutes(app);



app.listen(3000,()=>{
    console.log("Server is running on the PORT 3000")
});
