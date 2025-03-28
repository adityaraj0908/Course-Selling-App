const jwt = require("jsonwebtoken")
const JWT_USER_PASSWORD = "randomadityaraj"


function userMiddleware(req,res,next)
{
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_USER_PASSWORD)
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

module.exports({
    userMiddleware:userMiddleware
})