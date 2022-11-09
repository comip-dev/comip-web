import React, { useState } from "react";
import { comipInfo } from "../../assets/data/institucional/comipInfo";
import Footer from "../Footer/Footer";
import './ComipInfo.css'
import convenios01 from '../../assets/images/inst/interactivo.png'
const ComipInfo = ()=>{
    
    const HeadingPic = "https://res.cloudinary.com/diqcwn9e9/image/upload/v1663102914/comip/institucional/Portadas-02_1_ubegq5.png"
    const [open, setOpen] = useState(false)
    const handleOpen =() => setOpen(!open)
    return(
        <>
            <div className="institutional-pic" >
                <img className="heading-pic" src={HeadingPic} alt="encabezado"/>
            </div>
            <div  className="comip-info-container" >
                <div className="authorities-title" >{comipInfo.title}</div>
                <div className="separator-auth-line" ></div>
                <div className={open?"comip-info-text":"comip-info-text info-hidden "} >
                    {
                        comipInfo.text.map(p=>{
                            return <>
                                <p dangerouslySetInnerHTML={{__html:p}}/>
                                <br></br>
                            </>
                        })
                        
                    }
                       
                </div>
                {
                    !open ? (
                        <div className="info-vermas" onClick={handleOpen} >Seguir leyendo...</div>
                    ):<div className="info-vermenos" onClick={handleOpen} >Ver menos</div>
                }
                <img className="convenios-img" src={convenios01} alt="convenios-links" />
                <Footer/>
            </div>
        </>
    )
}

export default ComipInfo