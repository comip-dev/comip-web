import React from "react";
import { authorities } from "../../assets/data/institucional/authorities";
import AuthList from "./AuhtsList";
import './Authorities.css'
// import HeadingPic from '../../assets/images/encabezado-autoridades.png'

const Authorities = () =>{
    const HeadingPic = "https://res.cloudinary.com/diqcwn9e9/image/upload/v1663102806/comip/institucional/encabezado-autoridades_gs6pry.png"
    return(
        <>
            <div className="institutional-pic" >
                <img className="heading-pic" src={HeadingPic} alt="encabezado"/>
            </div>
            <div  className="authorities-container" >
                <div className="authorities-title" >Autoridades</div>
                <div className="separator-auth-line" ></div>
                <div className="lists-auth-container" >
                    <AuthList country="Argentina" list={authorities.argentina} />
                    <AuthList country="Paraguay" list={authorities.paraguay} />
                </div>
            </div>
        </>
    )
}

export default Authorities