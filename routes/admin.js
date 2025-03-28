const {Router} = require("express");
const adminRouter = Router();
const {adminModel, courseModel} = require("../db")
const JWT_ADMIN_PASSWORD = "randomaditya1234"
const SALT_ROUNDS = 5
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const {adminMiddleware} = require("../middlewares/admin_mw")

adminRouter.post("/signup",async function(req,res)
{
    const {email,password,firstName,lastName} = req.body

    try{
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        await adminModel.create(
            {
                email:email,
                password:hashedPassword,
                firstName:firstName,
                lastName:lastName
            }
        )
        res.json(
            {
                msg:"Admin signup successfull"
            }
        )
    }
    catch(err)
    {
        console.error("Error is"+err)
        res.json(
            {
                msg:"Admin signup failed"
            }
        )
    }
    
})

adminRouter.post("/signin",async function(req,res)
{
    const {email,password} = req.body;
    const admin = await adminModel.findOne({
        email:email
    })
    if(admin)
    {
        const correct_password = await bcrypt.compare(password,admin.password)
        if(correct_password)
        {
            const token = jwt.sign(
                {
                    id:admin._id
                },JWT_ADMIN_PASSWORD
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
                msg:"Admin not found"
            }
        )
    }
    
})

adminRouter.post("/course",adminMiddleware,async function(req,res)
{
    const adminId = req.adminId

    const {title,description,price,imageURL} = req.body
    const course = await courseModel.create({
        title:title,
        description:description,
        price:price,
        imageURL:imageURL,
        creatorId:adminId
    })
    res.json({
        status:"Course Created",
        courseID:course._id
    })
})

adminRouter.put("/course",function(req,res)
{
    res.json({
        "status":"success"
    })
})

adminRouter.get("/course/bulk",function(req,res)
{
    res.json({
        "status":"success"
    })
})


module.exports = {
    adminRouter: adminRouter
}