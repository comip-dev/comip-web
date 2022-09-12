import React from 'react'
import './Homepost.css'

const Homepost = ({title, img, imgSide, text}) =>{
    return(
        <div className={'post-container'} >
            <img className='article-img' src={img} alt="related img"/>
            <p className='article-title'>{title}</p>
        </div>
    )
}

export default Homepost