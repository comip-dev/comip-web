import { noticiasData } from "../assets/data/noticias"
export const getNews = async () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(noticiasData)
        },1000)
    })
}