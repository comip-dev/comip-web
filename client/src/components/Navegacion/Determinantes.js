import React from "react";
import TableDet from "./TableDet";

const Determinantes =()=> {
    return(
        <>
            <p>Publicación diaria donde se detalla el estado de las profundidades de los principales pasos críticos de los ríos Paraná (entre el Km 1210 y el Km 1463,5) y Paraguay, en sus tramos compartidos entre Argentina y Paraguay. Se consignan además los anchos navegables y el kilometraje de las profundidades críticas. La "determinante" hace referencia a la profundidad efectiva mínima informada para la navegación en la zona prevista. Para el cálculo de esta última se considera la última fecha de sondaje por lo que los valores mostrados pueden variar.</p>
            <br/>
            <br/>
            <p className="fuente-navegacion" >Fuente: Dirección Nacional de Vías Navegables, Distrito Paraná Superior.</p>
            <TableDet/>
        </>
    )
}

export default Determinantes