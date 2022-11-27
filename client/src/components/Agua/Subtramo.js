import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import AguaAbajo from "./AguaAbajo";
import AguaArriba from "./AguaArriba";

const Subtramo = () =>{
    const params = useParams()
    const {to} = params

    return(
        <>
            <>
        <div className='comip-info-container' >
            {
                to === 'abajo' && <AguaAbajo/>
            }
            {
                to === 'arriba' && <AguaArriba/>
            }
                <Footer/>
            </div>
        </>
        </>
    )
}

export default Subtramo