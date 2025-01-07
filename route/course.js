//Routing . all the routes start with courses are in this File.

function createCourseRoutes(app){
    app.post("/course/purchase",function(req,res){
        res.json({
            message : "You are going to purchase from these"
    
    
        })
    })
    app.get("/courses/preview",function(req,res){
        res.json({
            message:"List of availble courses"
        })
    })
    
}

module.exports = {
    createCourseRoutes:createCourseRoutes
}

