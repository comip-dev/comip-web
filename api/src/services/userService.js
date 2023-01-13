const User = require('../models/User')
const bcrypt = require('bcrypt')
const findUserByEmail =async  (email)=>{
        const user = await User.findOne({email})
        return user
}

const createUser  =async (email,contraseña) => {
    return new Promise(async(resolve,reject)=>{
        try{   
            const encryptedPassword = await bcrypt.hash(contraseña,10)
            const mongoUser = new User({
                email,
                contraseña: encryptedPassword
            })
            mongoUser.save(function (error, user) {
                if (error ) {
                    if(error.code===11000) reject(`Duplicate key ${error.keyValue}`)
                    else reject(error.message||error)
                }
                else{
                    console.log(user.email+ " saved to collection.");
                    resolve({status:"ok", userId:user._id})
                }
            });
        }catch(e){
            reject(e.message||e)
        }
    })
}


module.exports = {
    findUserByEmail,
    createUser
}