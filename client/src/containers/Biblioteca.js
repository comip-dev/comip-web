import React from "react";
import Footer from "../components/Footer/Footer";
import {  useParams } from "react-router-dom";
import Ictioplancton from "../components/Biblioteca/Ictioplancton";
import Peces from "../components/Biblioteca/Peces";
import NavObserver from "../components/NavObserver";
import ScrollToTop from "../components/ScrollToTop";
const Biblioteca = () =>{
    const params = useParams();
    const {section} = params
    return(
        <>
        <div id='section-container' >  
        <NavObserver/>          
            {section==="ictioplancton" && <Ictioplancton/>}
            {section==="peces" && <Peces/>}
            <Footer/>
        </div>
            <ScrollToTop div="section-container" />
        </>
    )
}
export default Biblioteca