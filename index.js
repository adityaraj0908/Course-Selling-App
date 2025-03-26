const express = require("express")
const mongoose = require("mongoose")
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")
const app = express()


app.use("api/v1/user",userRouter);
app.use("api/v1/course",courseRouter);
app.use("api/v1/admin",adminRouter);

async function main()
{
     await mongoose.connect("mongodb+srv://admin:admin1234@cluster0.rotv2.mongodb.net/EduVista")
     app.listen(3000)
     console.log("Everything working properly")
}
main()