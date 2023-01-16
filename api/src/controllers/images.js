const imageService = require('../services/images')

const upload = async(req,res)=>{
    try{
        const image = req?.files?.image;
        console.log(image)
        if(!image) return res.status(400).json({status:"error", error:"must send an image"})
        console.log("aca pasé")
        const uploaded = await imageService.upload(image)
        res.json({status:"ok", message:"image added successfully",data:uploaded})
    }catch(e){
        console.log("error===",e)
        res.status(500).json({status:"error", error:e.message||e});
    }
}

module.exports = {
    upload
}