import React from 'react'
import './Homepost.css'
const image=`../../assets/homepostsimgs/determinantes.svg`


const Homepost = ({title, img, imgSide, text}) =>{
    console.log(img)
    const image = require( `../../assets/homepostsimgs/${img}`)
    return(
        <div className={'post-container'} >
            <div className='carta' >
                <div className='cara' >
                    <img className='article-img' src={image} alt="related img"/>
                    <p className='article-title'>{title}</p>
                </div>
                <div className='cara detras' >

                    <p className='article-title-back'>{title}</p>
                    <p className='article-description'>{text}</p>
                </div>

            </div>
        </div>
    )
}

export default Homepost