import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Homepost.css'
const image=`../../assets/homepostsimgs/determinantes.svg`


const Homepost = ({title, img, imgSide, text, navigar,to,href}) =>{
    const navigate = useNavigate()
    const image = require( `../../assets/homepostsimgs/${img}`)
    if(href){
        return(
        <a href={href} target='blank' className={'post-container'} >
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
        </a>
        )
    }
    return(
        <div onClick={navigar?()=>navigate(to):null} className={'post-container'} >
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