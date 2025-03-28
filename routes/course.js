const {Router} = require("express");
const { model } = require("mongoose");
const courseRouter = Router();
const {courseModel, purchaseModel} = require("../db")
const {userMiddleware} = require("../middlewares/user_mw")



courseRouter.post("/purchase",userMiddleware,async function(req,res)
{
    const userId = req.userId
    const courseID = req.body.courseID

    await purchaseModel.create(
        {
            userId:userId,
            courseId:courseID
        }
    )
    res.json({
        "status": "Course bought successfully",
    })
})

courseRouter.get("/preview",async function(req,res)
{
    const courses = await courseModel.find({})
    res.json({
        courses
    })
})

module.exports = {
    courseRouter:courseRouter
}