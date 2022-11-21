import React from "react";
import TrafficStats from "./TrafficStats";
import './Comercial.css'
import Tramolist from "./Tramolist";
import DoughnutCharts from "./DoughnutCharts";

const Comercial = () =>{
    const list = [
        "En promedio se movilizaron 2.416.126 t anuales, considerando el período abril 2018 – marzo 2020.",
        "El movimiento de carga se concentra mayormente entre los meses de febrero y abril (superan las 300.000 t mensuales).",
        "Considerando el período agosto 2017 – marzo 2020, el mayor número de viajes fue registrado para busques con 12 y 20 barcazas.",
    ]
    const list2 = [
        "Los granos de soja representan el 75-80% de la carga total transportada en el Tramo. El arroz, maíz y pellet se encuentran en segundo lugar (menor al 10 %).",
        "Más del 50% de la carga transportada en sentido aguas arriba corresponde a fertilizantes. En sentido aguas abajo, se transporta mayormente granos de soja."
    ]
    return(
        <>
            <p>La COMIP, en convenio con la Prefectura Naval Argentina recibe datos periódicos sobre el movimiento de buques y el transporte de carga en el Tramo Compartido.</p>
            <p>Los Sistemas de Identificación Automática (AIS) son capaces de proporcionar información a barcos y autoridades costeras de forma automática, y en tiempo real.</p>
            <p><strong><a className="comer-ais" href="https://www.argentina.gob.ar/prefecturanaval/ais" target='blank'> ›Servidor Nacional AIS (acceder)</a></strong></p>
            <p>Respecto al tráfico comercial, resultan determinantes los datos de la operación de la <a className="comer-link-text" href="http://comip.org.ar/esclusa-yacyreta/"><strong>esclusa de Yacyretá</strong></a>. Se presentan a continuación las estadísticas obtenidas para el período <strong>agosto 2017 – marzo 2020 que brindan</strong>&nbsp;una aproximación a la situación actual de la actividad.</p>
            <TrafficStats/>
            <Tramolist list={list}/>
            <DoughnutCharts/>
            <Tramolist list={list2}/>
        </>
    )
}

export default Comercial