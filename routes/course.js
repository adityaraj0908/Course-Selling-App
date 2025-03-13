const {Router} = require("express");
const { model } = require("mongoose");
const courseRouter = Router();



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