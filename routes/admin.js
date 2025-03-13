const {Router} = require("express");
const adminRouter = Router();

adminRouter.post("/signup",function(req,res)
{
   res.json(
    {
        " status":"success"
    }
   )
})

adminRouter.post("/signin",function(req,res)
{
    res.json({
        "status":"success"
    })
})

adminRouter.post("/course",function(req,res)
{
    res.json({
        "status":"success"
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