import React from "react";
import Footer from "../components/Footer/Footer";
import {  useParams } from "react-router-dom";
import Ictioplancton from "../components/Biblioteca/Ictioplancton";
import Peces from "../components/Biblioteca/Peces";
const Biblioteca = () =>{
    const params = useParams();
    const {section} = params
    return(
        <>
        <div className='informe-container' >            
            {section==="ictioplancton" && <Ictioplancton/>}
            {section==="peces" && <Peces/>}
            <Footer/>
        </div>
        </>
    )
}
export default Biblioteca