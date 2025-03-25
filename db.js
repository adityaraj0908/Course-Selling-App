const mongoose = require("mongoose")
// console.log("Connecting to mongoDB...")
 mongoose.connect("mongodb+srv://admin:admin1234@cluster0.rotv2.mongodb.net/EduVista")
// console.log("Connected to mongoDB")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
// const ObjectId = Schema.ObjectId;

const userSchema = new Schema(
    {
        email:{type:String, unique:true},
        password: String,
        firstName: String,
        lastName:String

    }
);
const adminSchema = new Schema(
    {
        email:{type:String, unique:true},
        password: String,
        firstName: String,
        lastName:String
    }
);
const courseSchema = new Schema(
    {
        title:String,
        description:String,
        price:Number,
        imageURL :String,
        creatorId:ObjectId
    }
);
const purchaseSchema = new Schema(
    {
        userId:ObjectId,
        courseId:ObjectId
    }
);

const userModel = mongoose.model("users",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
   userModel,
    adminModel,
    courseModel,
    purchaseModel
}