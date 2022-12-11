import React from 'react'
import useWindowSize from '../hooks/useWindowSize'
import Footer from './Footer/Footer'
import NavObserver from './NavObserver'
import ScrollToTop from './ScrollToTop'
import './Section.css'
const Section = ({headingPic,title,children}) =>{
    const windowSize = useWindowSize()

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
                    <div className={windowSize.innerWidth>720?"section-title":'res-section-title' }>{title}</div>
                    <div className={windowSize.innerWidth>720?"separator-line":'res-separator-line' }></div>
                    <div className={windowSize.innerWidth>720?'content-container':'res-content-container'} >{children}</div>
                    <Footer/>
                </div>
            </div>
            <ScrollToTop div='section-container' id={true} />
        </>
    )
}

export default Section