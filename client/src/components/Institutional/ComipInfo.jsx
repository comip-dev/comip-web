import React, { useState } from "react";
import { comipInfo } from "../../assets/data/institucional/comipInfo";
import Footer from "../Footer/Footer";
import './ComipInfo.css'
import convenios01 from '../../assets/images/inst/interactivo.png'
const ComipInfo = ()=>{
    
    const HeadingPic = "https://res.cloudinary.com/diqcwn9e9/image/upload/v1663102914/comip/institucional/Portadas-02_1_ubegq5.png"
    
    return(
        <>
            <div className="institutional-pic" >
                <img className="heading-pic" src={HeadingPic} alt="encabezado"/>
            </div>
            <div  className="comip-info-container" >
                <div className="authorities-title" >{comipInfo.title}</div>
                <div className="separator-auth-line" ></div>
                <div className="comip-info-text" >
                    {
                        comipInfo.text.map(p=>{
                            return <>
                                <p dangerouslySetInnerHTML={{__html:p}}/>
                            </>
                        })
                        
                    }
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
                
                <img className="convenios-img" src={convenios01} alt="convenios-links" />
                <Footer/>
            </div>
        </>
    )
}

export default ComipInfo