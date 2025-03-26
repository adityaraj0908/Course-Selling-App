const {Router} = require("express");
const userRouter = Router();
const {userModel} = require("../db")


userRouter.post("/signup",async function(req,res)
{
    const {email,password,firstName,lastName} = req.body

    try{
        await userModel.create(
            {
                email:email,
                password:password,
                firstName:firstName,
                lastName:lastName
            }
        )
    }
    catch(err)
    {
        res.json(
            {
                msg:"Signup failed"
            }
        )
    }
    res.json(
        {
            msg:"Signup successfull"
        }
    )
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