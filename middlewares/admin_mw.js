const admin = require("../routes/admin");
const jwt = require("jsonwebtoken")
require('dotenv').config()
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD

function adminMiddleware(req,res,next)
{
    const token = req.headers.token;
        const decoded = jwt.verify(token,JWT_ADMIN_PASSWORD)
        if(decoded)
        {
            req.adminId = decoded.id
            next()
        }
        else
        {
            res.status(403).json(
                {
                    msg:"You are not signed in"
                }
            )
        }
}

module.exports = {
    adminMiddleware:adminMiddleware
}