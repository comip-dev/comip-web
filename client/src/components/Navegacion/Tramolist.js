import React from "react";
import './TramoButtons.css'

const Tramolist = ({list}) =>{
    
    return(
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
            {
                list.map(item=>{
                    return <div className="tramo-list-line" >{item}</div>
                }) 
            }
        </div>
        </>
    )
}

export default Tramolist