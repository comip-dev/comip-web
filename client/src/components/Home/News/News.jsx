import React from "react";
import { bloginfo } from "../../../assets/data/bloginfo";
import New from "./New";
import './News.css'

const News = () =>{
    return(
        <div className="news-section" >
            <div className="news-container" >
            <p className="news-title" >Novedades</p>
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
            <button className="news-button" >Más Novedades</button>
            </div>
        </div>
    )
}

export default News