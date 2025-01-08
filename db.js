console.log("Database file is being executed")
const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://mmanav10:Ramayan123@cluster0.nordt.mongodb.net/week8app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((error) => console.error("Error connecting to MongoDB:", error.message));

const {Schema} = mongoose;
const {ObjectId} = mongoose;
//const Schema = mongoose.Schema
//const ObjectId = mongoose.ObjectId


//Schema is a class , So we are creating a object of that class.
const userSchema = new Schema({
    email:{type:String, unique:true},
    password:String,
    firstName:String,
    lastName:String

});
const adminSchema = new Schema({
    email:{type:String, unique:true},
    password:String,
    firstName:String,
    lastName:String

});
const courseSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId

});
const purchaseSchema = new Schema({
    userId:ObjectId,
    courseId:ObjectId

});

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}

