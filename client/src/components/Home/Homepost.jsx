import React from 'react'
import './Homepost.css'

const Homepost = ({title, img, imgSide, text}) =>{
    return(
        <div className={'post-container'} >
            <div className='carta' >
                <div className='cara' >
                    <img className='article-img' src={img} alt="related img"/>
                    <p className='article-title'>{title}</p>
                </div>
                <div className='cara detras' >

                    <p className='article-title'>{title}</p>
                    <p className='article-description'>{text}</p>
                </div>

            </div>
        </div>
    )
}

export default Homepost