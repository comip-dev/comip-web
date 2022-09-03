import React from 'react'
import './Homepost.css'

const Homepost = ({title, img, imgSide, text}) =>{
    return(
        <div className={imgSide==="right" ? 'post-container right' : 'post-container left'} >
            <img className='article-img' src={img} alt="related img"/>
            <div className='article-description' >
                <p className='article-title'>{title}</p>
                <div className='article-text' >{text}</div>
            </div>
        </div>
    )
}

export default Homepost