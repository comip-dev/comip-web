import { noticiasObject, noticiasData } from "../assets/data/noticias"
import axios from '../api/index'
export const getNews = async (page) =>{
    return await axios.request('get',`/news/all?page=${page}`)
        .then(res => Promise.resolve(res.data.data))
    }
export const getNewDetail = async ({id})=>{
    return await axios.request('get',`/news/id/${id}`)
        .then(res => Promise.resolve(res.data.data))
    
    
}