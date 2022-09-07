import React from "react";
import BottomCards from "../components/BottomCards";
import './Institutional.css'
import HeadingPic from '../assets/images/encabezado-autoridades.png'
import Authorities from "../components/Institutional/Authorities";
import ComipInfo from "../components/Institutional/ComipInfo";


const Institutional = () =>{
    
    
    return(
        
        <>
        <div className="institutional-pic" >
            <img className="heading-pic" src={HeadingPic} alt="encabezado"/>
        </div>
            <Authorities/>
            <ComipInfo/>
        </>
        
        
    )
}

export default Institutional