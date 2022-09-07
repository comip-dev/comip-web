import React from "react";
import { comipInfo } from "../../assets/data/institucional/comipInfo";
import './ComipInfo.css'

const ComipInfo = ()=>{
    return(
        <div className="comip-info-container" >
            <div className="authorities-title" >{comipInfo.title}</div>
            <div className="comip-info-text" >{
                comipInfo.text.map(p=>{
                    return <>
                        <p dangerouslySetInnerHTML={{__html:p}}/>
                        <br></br>
                    </>
                })
                
                }</div>
        </div>
    )
}

export default ComipInfo