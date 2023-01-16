const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const asyncHandler = require('express-async-handler')
const userService = require('../services/userService')

const registerUser = async (req, res) => {
    try{
        const {email, contraseña} = req.body
        const alreadyExists = await userService.findUserByEmail(email)
        if(alreadyExists) return res.json({status:"Error", error:"Ya existe el usuario"})
        const newUser = await userService.createUser(email, contraseña)
        newUser ? res.json({status:"ok"}) : res.status(500).json({status:"error", error:"No se pudo crear el usuario"})
    }catch(e){
        res.status(500).json({status:"error", error:e.message || e})
    }
}


const loginUser = async(req,res) => {
    try{
        const {email, contraseña} = req.body
        if(!email || !contraseña) return res.status(400).json({status:"error",error:"Debe enviar mail y contraseña"})
        const user = await userService.findUserByEmail(email)
        if(!user) return res.status(401).json({status:"error",error:"Usuario o contraseña inválidos"})
        const isValid = await bcrypt.compare(contraseña, user.contraseña);
        if(!isValid)  return res.status(401).json({status:"error",error:"Usuario o contraseña inválidos"})
        const token = jwt.sign({id:user._id,email},process.env.TOKEN_SECRET,{expiresIn:'30m'})
        const refreshToken = jwt.sign(
            {'email':email},
            process.env.REFRESH_SECRET,
            {expiresIn:'7d'}
        )
        //create secure cookie with refresh token
        res.cookie('jwt',refreshToken,{
            httpOnly:true,
            secure:true,
            sameSite:'None',
            maxAge:7*24*60*60*1000
        })
        return res.json({
            token,
            // user:{
            //     id:user._id,
            //     email:user.email
            // }
        })
    }catch(e){
        res.status(500).json({status:"error",error:e.message||e})
    }
}
const refresh = (req,res) => {
    const cookies = req.cookies
    console.log(cookies)
    if(!cookies?.jwt) return res.status(401).json({message:'Unauthorized'})
    const refreshToken = cookies.jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_SECRET,
        asyncHandler(async(err,decoded) =>{
            if(err) return res.status(403).json({message:'Forbidden'})
            const foundUser = await userService.findUserByEmail(decoded.email)
            if(!foundUser) return res.status(401).json({message:'Unauthorized'})
            const accessToken = jwt.sign(
                {id:foundUser._id,email: foundUser.email},process.env.TOKEN_SECRET,{expiresIn:'30m'}
            )
            res.json({status:'ok',token:accessToken})
        })
    )
}
const logout = (req,res) => {
    const cookies = req.cookies 
    if(!cookies?.jwt) return res.sendStatus(204) // No content
    res.clearCookie('jwt',{httpOnly:true, sameSite:'None',secure:true})
    res.json({message:'Cookie cleared'})
}
const isLogged = (req,res) => {
    res.json({status:'ok',message:'Logged in'})
}
module.exports = {
    loginUser,
    registerUser,
    refresh,
    logout,
    isLogged
}