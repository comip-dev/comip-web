const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization || req.headers.Authorization
    if(!authHeader?.startsWith('Bearer ')){
        return res.status(401).json({message:'Unauthorized'})
    }
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)
    if (token == null) return res.status(401).json({status:"error",error:"No autorizado"})

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        // console.log(err)
        if (err) return res.status(403).json({status:"error",error:"No autorizado"})

        req.userId = user.id
        next()
    })
}

module.exports = verifyJWT