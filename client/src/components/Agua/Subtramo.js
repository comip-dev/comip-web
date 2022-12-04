import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavObserver from "../NavObserver";
import ScrollToTop from "../ScrollToTop";
import AguaAbajo from "./AguaAbajo";
import AguaArriba from "./AguaArriba";

const Subtramo = () =>{
    const params = useParams()
    const {to} = params

    return(
        <>
            <>
        <div id='section-container' >
            <NavObserver/>
            {
                to === 'abajo' && <AguaAbajo/>
            }
            {
                to === 'arriba' && <AguaArriba/>
            }
                <Footer/>
            </div>
        <ScrollToTop div="section-container" />
        </>
        </>
    )
}

export default Subtramo