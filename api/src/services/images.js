const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})
const upload = async(image) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            // const location = await imageLocation(image)
            // console.log(location)
            await cloudinary.uploader.upload(
                image.tempFilePath,
                {folder:"newsPictures"},
                async (err,result) => {
                    if (err) {
                        reject("Error occurred while uploading file");
                    } else {
                        //get saved image url
                        const imageUrl = result.secure_url;
                        // const editPicture = await editCommerce(commerceId,{imageUrl})
                        resolve(imageUrl)
                        }
                    }
            )
        }catch(e){
            reject(e.message||e)
        }
    })
}

module.exports = {
    upload
}