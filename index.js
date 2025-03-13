const express = require("express")
const app = express()

app.post("/user/signup",function(req,res)
{
    res.json({
        "status": "success",
    })
})

app.post("/user/signin",function(req,res)
{
    res.json({
        "status": "success",
    })
})

app.get("/user/purchases",function(req,res)
{
    res.json({
        "status": "success",
    })
})

app.get("/courses",function(req,res)
{
    res.json({
        "status": "success",
    })
})

app.post("/course/purchase",function(req,res)
{
    res.json({
        "status": "success",
    })
})










app.listen(3000)