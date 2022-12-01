const express = require("express");
const { getAlturas } = require("../services/alturaService");

const router = express.Router();

router.get('/', async(req,res)=>{
    try{
        const alturas = await getAlturas()
        res.json({status:'ok',data:alturas})
    }catch(e){
        res.json({status:'error',error:e.message||e})
    }
})

module.exports = router;
