import React from 'react'
import Footer from './Footer/Footer'
import NavObserver from './NavObserver'
import ScrollToTop from './ScrollToTop'
import './Section.css'
const Section = ({headingPic,title,children}) =>{
    return(
        <>
            <div id='section-container' >
                <NavObserver/>
            <div className="institutional-pic" >
                {
                    headingPic &&
                <img className="heading-pic" src={headingPic} alt="encabezado"/>
                }
            </div>
            <div id='comip-info-container' >
                <div className="authorities-title" >{title}</div>
                <div className="separator-auth-line" ></div>
                <div className='content-container' >{children}</div>
                <Footer/>
            </div>
            <ScrollToTop div='section-container' id={true} />
            </div>
        </>
    )
}

export default Section