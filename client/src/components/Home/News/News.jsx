import React from "react";
import { bloginfo } from "../../../assets/data/bloginfo";
import New from "./New";
import './News.css'

const News = () =>{
    return(
        <div className="news-container" >
            <div className="news-list" >
                {
                    bloginfo?.map(item=>{
                        return <New 
                                img={item.img}
                                title={item.title}
                                text={item.text}
                        />
                    })
                }

            </div>
        <button className="news-button" >Mas Noticias</button>
        </div>
    )
}

export default News