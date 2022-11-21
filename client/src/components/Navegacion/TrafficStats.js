import React from "react";
import TrafficStat from "./TrafficStat";
import "./TrafficStats.css";

const slide11 = '/images/Navegacion/3_Transporte fluvial/1_Tráfico comercial/Gráfico 1_1.jpg'
const slide12 = '/images/Navegacion/3_Transporte fluvial/1_Tráfico comercial/Gráfico 1_2.jpg'
const slide13 = '/images/Navegacion/3_Transporte fluvial/1_Tráfico comercial/Gráfico 1_3.jpg'
const slide21 = '/images/Navegacion/3_Transporte fluvial/1_Tráfico comercial/Gráfico 2_1.jpg'
const slide22 = '/images/Navegacion/3_Transporte fluvial/1_Tráfico comercial/Gráfico 2_2.jpg'
const slide23 = '/images/Navegacion/3_Transporte fluvial/1_Tráfico comercial/Gráfico 2_3.jpg'
const slide31 = '/images/Navegacion/3_Transporte fluvial/1_Tráfico comercial/Gráfico 3_1.jpg'
const slide32 = '/images/Navegacion/3_Transporte fluvial/1_Tráfico comercial/Gráfico 3_2.jpg'
const slide33 = '/images/Navegacion/3_Transporte fluvial/1_Tráfico comercial/Gráfico 3_3.jpg'
const TrafficStats = () =>{
    const slides1=[slide11,slide12,slide13]
    const slides2=[slide21,slide22,slide23]
    const slides3=[slide31,slide32,slide33]
    return(
        <>
            <div className="trafficstats-container" >
                <TrafficStat slides={slides1} />
                <TrafficStat slides={slides2} />
                <TrafficStat slides={slides3} />
            </div>
        </>
    )
}

export default TrafficStats