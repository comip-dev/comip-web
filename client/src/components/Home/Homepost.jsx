import React from 'react'
import './Homepost.css'
const image=`../../assets/homepostsimgs/determinantes.svg`


const Homepost = ({title, img, imgSide, text}) =>{
    
    const image = require( `../../assets/homepostsimgs/${img}`)
    return(
        <div className={'post-container'} >
            <div className='carta' >
                <div className='cara' >
                    <img className='article-img' src={image} alt="related img"/>
                    <p className='article-title'>{title}</p>
                </div>
                <div className='cara detras' >                    
                    <div className='article-title-back'>{title}</div>
                    <div className='article-description'>{text}</div>                    
                </div>

            </div>
        </div>
    )
}

export default Homepost