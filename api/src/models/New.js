const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const newSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    html:{
        type:String,
        required:true
    },
    img:{type:String},
    videoLink:{type:String},
    linkPdf:{type:String},
    // slides:{type:String},
    
},{
    timestamps:true
});
module.exports = mongoose.model("New", newSchema);