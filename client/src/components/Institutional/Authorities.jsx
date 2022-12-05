import React from "react";
import { authorities } from "../../assets/data/institucional/authorities";
import Footer from "../Footer/Footer";
import AuthList from "./AuhtsList";
import './Authorities.css'
import HeadingPic from '../../assets/images/Encabezados-Autoridades.png'
import ScrollToTop from "../ScrollToTop";
import NavObserver from "../NavObserver";

const Authorities = () =>{
    
    // const HeadingPic = "https://res.cloudinary.com/diqcwn9e9/image/upload/v1666223907/comip/institucional/Cafiero_y_Acevedo_agenda_bilateral_y_regional_de_Argentina_y_..._imb8z7.jpg"
    return(
        <>
        <div id="section-container" >
            <NavObserver/>
            <div className="institutional-pic" >
                <img className="heading-pic" src={HeadingPic} alt="encabezado"/>
            </div>
            <div  className="authorities-container" >
                <div className="authorities-title" >Autoridades</div>
                <div className="separator-auth-line" ></div>
                <div className="lists-auth-container" >
                    <AuthList authorities={authorities} />
                </div>
            <Footer/>
            </div>
        </div>
            <ScrollToTop div='section-container' />
        </>
    )
}

export default Authorities