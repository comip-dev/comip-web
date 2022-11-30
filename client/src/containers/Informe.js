import React from "react";
import Footer from "../components/Footer/Footer";
import Semestral from "../components/Informe/Semestral";
import {  useParams } from "react-router-dom";
import Final from "../components/Informe/Final";
import ScrollToTop from "../components/ScrollToTop";
const Informe = () =>{
    const params = useParams();
    const {period} = params
    

    return(
        <>
        <div id='section-container' >            
            {period==="semestre" && <Semestral/>}
            {period==="final" && <Final/>}
            <Footer/>
            <ScrollToTop div='section-container' />
        </div>
        </>
    )
}
export default Informe