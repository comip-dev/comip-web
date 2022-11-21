import React from "react";
import PuertosBtn from "./PuertosBtn";
import './Puertos.css'
const Puertos = () =>{
    return(
        <>
            <p><strong>Flota</strong></p>
            <p>Paraguay tiene una de las mayores flotas fluviales del mundo, con lo cual las embarcaciones de esa bandera representan más del 90% de las embarcaciones de la hidrovía Paraná-Paraguay. Esta situación de predominio se acentúa en el Tramo Compartido del Río Paraná entre Argentina y Paraguay.</p>
            <p>El grueso de la carga se realiza mediante el sistema de transporte en barcazas asistidas por remolcadores que facilitan la carga a granel tanto seca como húmeda (granos y combustibles). El armado de los convoyes está sujeto a la disponibilidad de la carga y al Régimen Único de Dimensiones Máximas para la Hidrovía Paraguay – Paraná (290 metros de eslora x 50 metros de manga), los cuales llegan a componerse de hasta 20 barcazas en el Tramo Compartido.</p>
            <p>La flota fluvial que abastece el comercio se compone de empresas propietarias, armadoras u operadoras, destacándose U.A.B.L. S.A. con casi el 56% de los pases por la esclusa de Yacyretá.  Otros son Directo Shipping S.A., Cargill, Maritime Shipping SRL, Naviera Chaco, Hidrovías do Brasil, etc.</p>
            <PuertosBtn/>
        </>
    )
}

export default Puertos