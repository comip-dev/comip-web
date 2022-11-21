import React from "react";
import './TramoButtons.css'

const Tramolist = ({list}) =>{
    
    return(
        <>
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