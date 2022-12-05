import React from "react";
import Footer from "../components/Footer/Footer";
import Semestral from "../components/Informe/Semestral";
import {  useParams } from "react-router-dom";
import Final from "../components/Informe/Final";
import ScrollToTop from "../components/ScrollToTop";
import NavObserver from "../components/NavObserver";
const Informe = () =>{
    const params = useParams();
    const {period} = params
    

    return(
        <>
        <div id='section-container' >
            <NavObserver/>
            {period==="semestre" && <Semestral/>}
            {period==="final" && <Final/>}
            <Footer/>
        </div>
            <ScrollToTop div='section-container' />
        </>
    )
}
export default Informe