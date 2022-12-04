import React from "react";
import { useNavigate } from "react-router-dom";
import { bloginfo } from "../../../assets/data/bloginfo";
import New from "./New";
import './News.css'

const News = () =>{
    const navigate = useNavigate()
    
    return(
        <div className="news-section" >
            <div className="news-container" >
                <div className="news-title" >Novedades</div>
                <div className="news-list" >
                    {
                        bloginfo?.map(item=>{
                            return <New 
                                    img={item.img}
                                    title={item.title}
                                    containerStyle="new-container"
                                    id={item.id}
                            />
                        })
                    }

                </div>
                <button onClick={()=>navigate('/noticias')} className="news-button" >Más Novedades</button>
            </div>
        </div>
    )
}

export default News