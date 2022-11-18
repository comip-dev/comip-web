import React from 'react'
import Footer from './Footer/Footer'
import './Section.css'
const Section = ({headingPic,title,children}) =>{
    
    return(
        <>
            <div className="institutional-pic" >
                {
                    headingPic &&
                <img className="heading-pic" src={headingPic} alt="encabezado"/>
                }
            </div>
            <div className='comip-info-container' >
                <div className="authorities-title" >{title}</div>
                <div className="separator-auth-line" ></div>
                <div className='content-container' >{children}</div>
                <Footer/>
            </div>
        </>
    )
}

export default Section