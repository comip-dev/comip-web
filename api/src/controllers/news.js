const newsServices = require('../services/news')

const getAll = async (req,res) =>{
    try{
        const {page } = req.query
        const list = await newsServices.getAll(page)
        return res.json({status:'ok',data:list})
    }catch(e){
        res.status(500).json({status:'error', error:e.message || e})
    }
}
const getOne = async (req,res) =>{
    try{
        const {id} = req.params; 
        const item = await newsServices.getOne(id)
        item ? res.json({status:'ok',data:item}): res.json({status:'error',error:'Not found'})
    }catch(e){
        res.status(500).json({status:'error', error:e.message || e})
    }
}
const edit = async (req,res) =>{
    try{
        const {html, title, img,videoLink,linkPdf, id } = req.body
        const  update = {html, title, img,videoLink,linkPdf }
        const edited = await newsServices.edit({id,update})
        return res.json({status:'ok',data:edited})
    }catch(e){
        res.status(500).json({status:'error', error:e.message || e})
    }
}
const add = async (req,res) =>{
    try{
        const {html, title, img,videoLink,linkPdf } = req.body
        const  data = {html, title, img,videoLink,linkPdf }
        const created = await newsServices.add(data)
        return res.json({status:'ok',data:created})
    }catch(e){
        res.status(500).json({status:'error', error:e.message || e})
    }
}
const remove = async (req,res) =>{
    try{
        const {id} = req.body
        if(!id) return res.status(400).json({status:'error', error:'Enviar parámetro id' })
        const deleted = await newsServices.remove(id)
        return res.json({status:'ok',data:deleted})
    }catch(e){
        res.status(500).json({status:'error', error:e.message || e})
    }
}

module.exports= {
    getAll,
    getOne,
    edit, 
    add, 
    remove
}