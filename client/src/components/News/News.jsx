import React from "react";
import { useNavigate } from "react-router-dom";
import { bloginfo } from "../../assets/data/bloginfo";
import useWindowSize from "../../hooks/useWindowSize";
import New from "./New";
import './News.css'

const News = () =>{
    const navigate = useNavigate()
    const windowSize = useWindowSize()
    return(
        <div className="news-section" >
            <div className="news-container" >
                <div className="news-title" >Novedades</div>
                <div className={windowSize.innerWidth>720?"news-list":'res-news-list'} >
                    {
                        bloginfo?.map(item=>{
                            return <New 
                                    img={item.img}
                                    title={item.title}
                                    containerStyle={windowSize.innerWidth>720?"new-container":'res-new-container'}
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