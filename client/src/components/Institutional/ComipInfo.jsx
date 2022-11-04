import React, { useState } from "react";
import { comipInfo } from "../../assets/data/institucional/comipInfo";
import Footer from "../Footer/Footer";
import './ComipInfo.css'

const ComipInfo = ()=>{
    const convenios01 = "https://res.cloudinary.com/diqcwn9e9/image/upload/v1663104313/comip/convenios/convenios-01_tdcgda.png"
    const HeadingPic = "https://res.cloudinary.com/diqcwn9e9/image/upload/v1663102914/comip/institucional/Portadas-02_1_ubegq5.png"
    const [open, setOpen] = useState(false)
    const handleOpen =() => setOpen(!open)
    return(
        <>
            <div className="institutional-pic" >
                <img className="heading-pic" src={HeadingPic} alt="encabezado"/>
            </div>
            <div  className="comip-info-container" >
                <img className="convenios-img" src={convenios01} alt="convenios-links" />
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
                {
                    !open ? (
                        <div className="info-vermas" onClick={handleOpen} >Seguir leyendo...</div>
                    ):<div className="info-vermenos" onClick={handleOpen} >Ver menos</div>
                }
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default ComipInfo