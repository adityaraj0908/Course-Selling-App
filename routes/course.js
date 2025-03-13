const {Router} = require("express");
const { model } = require("mongoose");
const courseRouter = Router();



courseRouter.post("/course/purchase",function(req,res)
{
    res.json({
        "status": "success",
    })
})

courseRouter.get("/course/preview",function(req,res)
{
    res.json({
        "status": "success",
    })
})

module.exports = {
    courseRouter:courseRouter
}