const News = require('../models/New')

const getAll = async(page) =>{
    const paginationOptions = {
        page,
        limit:9,
        sort: { createdAt: -1 }
    }
    return new Promise(async(resolve,reject)=>{
        
        try{
            const list = await News.paginate({},paginationOptions)
            resolve(list)
        }catch(e){
            reject(e.message || e )
        }
    })
}
const getOne = async(id) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            const one = await News.findById(id)
            resolve(one)
        }catch(e){
            reject(e.message || e )
        }
    })
}
const edit = async({id, update}) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            const edited = await News.findByIdAndUpdate(id,update,{new:true})
            resolve(edited)
        }catch(e){
            reject(e.message || e )
        }
    })
}
const remove = async(id) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            if(!id) return reject('must sent an id')
            const deleted = await News.findByIdAndDelete(id)
            resolve('deleted')
        }catch(e){
            reject(e.message || e )
        }
    })
}
const add = async(data) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            const newNew = new News(data)
            newNew.save(async function(err, line){
                if(err){
                    console.log('Error saving', err)
                    reject(err)
                }else{
                    console.log('New new saved')
                    resolve(newNew)
                }
            })
        }catch(e){
            reject(e.message || e )
        }
    })
}

module.exports = {
    getAll, 
    getOne, 
    edit, 
    add, 
    remove
}