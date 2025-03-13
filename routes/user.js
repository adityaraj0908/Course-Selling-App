const {Router} = require("express");
const userRouter = Router();



userRouter.post("/user/signup",function(req,res)
{
    res.json({
        "status": "success",
    })
})

userRouter.post("/user/signin",function(req,res)
{
    res.json({
        "status": "success",
    })
})
userRouter.get("/user/purchases",function(req,res)
{
    res.json({
        "status": "success",
    })
})

module.exports = {
    userRouter:userRouter
}