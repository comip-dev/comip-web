import React from "react";
import { authorities } from "../../assets/data/institucional/authorities";
import AuthList from "./AuhtsList";
import './Authorities.css'
const Authorities = () =>{
    return(
        <div className="authorities-container" >
            <div className="authorities-title" >Autoridades</div>
            <div className="separator-auth-line" ></div>
            <div className="lists-auth-container" >
                <AuthList country="Argentina" list={authorities.argentina} />
                <AuthList country="Paraguay" list={authorities.paraguay} />
            </div>
        </div>
    )
}

export default Authorities