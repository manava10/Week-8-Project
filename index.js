const express = require("express");

const{createCourseRoutes} = require("./route/course");
const{createUserRoutes} = require("./route/user");

const app = express();


createCourseRoutes(app);
createCourseRoutes(app);






app.listen(3000,()=>{
    console.log("Server is running on the PORT 3000")
});
