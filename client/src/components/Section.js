import React from 'react'
import './Section.css'
const Section = ({headingPic,title,children}) =>{

    return(
        <>
            <div className="institutional-pic" >
                <img className="heading-pic" src={headingPic} alt="encabezado"/>
            </div>
            <div className='comip-info-container' >
                <div className="authorities-title" >{title}</div>
                <div className="separator-auth-line" ></div>
                <div className='content-container' >{children}</div>
            </div>
        </>
    )
}

export default Section