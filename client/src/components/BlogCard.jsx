import React from 'react'
import './BlogCard.css'

const BlogCard = ({img}) =>{
    return(
        <div className='card-container'>
            <img src={img} className="blog-img" alt="Imagen de referencia" loading="lazy" onLoad={console.log("cargado")} />
                <div className='card-title'>Lorem ipsum dolor sit, amet..</div>
            
        </div>
    )
}

export default BlogCard