const jwt = require('jsonwebtoken')

const isAuth = async(req,res,next) =>{
    try {
        const token = req.cookies.token
        if(!token) return res.status(401).json({
            message:'Unauthorized access',
            isLogin:false
        })

        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        if(!decoded) return res.status(401).json({
            message:'Unauthorized access',
            isLogin:false
        })
        console.log(decoded)
        req.userID = decoded.id
        next()
    } catch (error) {
        return res.status(500).json({
            message : 'Internal server error',
            isLogin:false,
            error : error.message
        })
    }
}

module.exports = isAuth