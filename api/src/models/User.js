const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const userSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    contraseña:{
        type:String,
        required:true
    },
    
    
},{
    timestamps:true
});
module.exports = mongoose.model("User", userSchema);