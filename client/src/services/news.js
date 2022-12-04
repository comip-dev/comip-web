import { noticiasObject, noticiasData } from "../assets/data/noticias"
export const getNews = async () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(noticiasData)
        },1000)
    })
}
export const getNewDetail = ({id})=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            noticiasObject[id]? resolve(noticiasObject[id]):reject('No existe la noticia seleccionada')
        },1000)
    })
    
}