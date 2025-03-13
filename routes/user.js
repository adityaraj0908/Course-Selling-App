const {Router} = require("express");
const userRouter = Router();



userRouter.post("/signup",function(req,res)
{
    res.json({
        "status": "success",
    })
})

userRouter.post("/signin",function(req,res)
{
    res.json({
        "status": "success",
    })
})
userRouter.get("/purchases",function(req,res)
{
    res.json({
        "status": "success",
    })
})

module.exports = {
    userRouter:userRouter
}