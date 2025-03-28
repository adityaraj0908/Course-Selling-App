const {Router} = require("express");
const userRouter = Router();
require('dotenv').config()
const {userModel} = require("../db")
const jwt = require("jsonwebtoken")
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD
const bcrypt = require("bcryptjs");
const SALT_ROUNDS = 5;


userRouter.post("/signup",async function(req,res)
{
    const {email,password,firstName,lastName} = req.body

    try{
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        await userModel.create(
            {
                email:email,
                password:hashedPassword,
                firstName:firstName,
                lastName:lastName
            }
        )
        res.json(
            {
                msg:"Signup successfull"
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
    
})

userRouter.post("/signin",async function(req,res)
{
    const {email,password} = req.body;
    const user = await userModel.findOne({
        email:email
    })
    if(user)
    {
        const correct_password = await bcrypt.compare(password,user.password)
        if(correct_password)
        {
            const token = jwt.sign(
                {
                    id:user._id
                },JWT_USER_PASSWORD
            );
            res.json(
                {
                    token:token
                }
            )
        }
        else{
            res.status(403).json(
                {
                    msg:"Incorrect Password"
                }
            )
        }
        
    }
    else{
        res.status(403).json(
            {
                msg:"User not found"
            }
        )
    }
    
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