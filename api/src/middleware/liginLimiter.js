const rateLimit = require('express-rate-limit')
const {logEvents} = require('./logger')

const loginEmitter = rateLimit({
    windowMs: 60*1000,
    max:5,
    message:{message:'Too many attemps from this IP'},
    handler:(req,res,next,options) =>{
        logEvents(`Too many requests:${oprions.message.message}\t${req.methos}\t${req.url}\t${req.headers.origin}`,'errLog.log')
        res.status(options.statusCode).send(options.message)
    },
    standardHeaders:true,
    legaxyHeaders:false
})

module.exports = loginLimiter