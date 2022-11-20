import React from "react";
import Footer from "../components/Footer/Footer";
import Semestral from "../components/Informe/Semestral";
import {  useParams } from "react-router-dom";
import Final from "../components/Informe/Final";
const Informe = () =>{
    const params = useParams();
    const {period} = params
    

    return(
        <>
        <div className='informe-container' >            
            {period==="semestre" && <Semestral/>}
            {period==="final" && <Final/>}
            <Footer/>
        </div>
        </>
    )
}
export default Informe