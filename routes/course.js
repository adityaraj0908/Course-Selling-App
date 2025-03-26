const {Router} = require("express");
const { model } = require("mongoose");
const courseRouter = Router();
const {courseModel} = require("../db")



courseRouter.post("/purchase",function(req,res)
{
    res.json({
        "status": "success",
    })
})

courseRouter.get("/preview",function(req,res)
{
    res.json({
        "status": "success",
    })
})

module.exports = {
    courseRouter:courseRouter
}