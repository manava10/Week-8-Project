//For routing all the endpoint starting with user

function createUserRoutes(app){
    app.post("/user/signup",function(req,res){
        res.json({
            message:"ignUp EndPoint"
        })
    })
    app.post("/user/signin",function(req,res){
        res.json({
            message:"Sign in Endpoint"
        })
    })
    app.get("/user/purchase",function(req,res){
        res.json({
            message: "These are the course purchased by you"
    
        })
    })
}
module.exports = {
    createUserRoutes:createUserRoutes
}
