import React from "react";
import BottomCards from "../components/BottomCards";
import './Institutional.css'
import HeadingPic from '../assets/encabezado-autoridades.png'
import Authorities from "../components/Institutional/Authorities";


const Institutional = () =>{
    
    
    return(
        
        <>
        <div className="institutional-container" >
            <img className="heading-pic" src={HeadingPic} alt="encabezado"/>
        </div>
            

        </>
        
        
    )
}

export default Institutional