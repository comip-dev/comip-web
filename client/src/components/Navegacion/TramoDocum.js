import React from "react";
import SingleTable from "../Informe/SingleTable";

const TramoDocum = () =>{
    const left =[
        {
            text:"La Navegación de Carga en el Río Paraná – Problemática común – Estado de la vía navegable – COMIP",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/01-La-Navegacion-de-Carga-en-el-Rio-Parana-Problematica-comun-Estado-de-la-via-navegable-COMIP-1.pdf"
        },
        {
            text:"Acta Reunión Binacional 25-06-19",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/02-ACTA-REUNION-BINACIONAL-25-06-19-1.pdf"
        },
        {
            text:"Acta Reunion Bilateral Navegacion 2 y 3 de julio de 2019",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/03-Acta-Reunion-Bilateral-Navegacion-2-y-3-de-julio-de-2019-1.pdf"
        },
        {
            text:"1er Declaracion de Emergencia – Navegación",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/04-1er-Declaracion-de-Emergencia-Navegacion-1.pdf"
        },
        {
            text:"ACTA N°1-2019 GRUPO DE TRABAJO ENCARNACION – Arg-Py",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/05-ACTA-N°1-2019-GRUPO-DE-TRABAJO-ENCARNACION-Arg-Py-1.pdf"
        },
        {
            text:"Acta de Inicio Grupo de Trabajo Encarnación",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/06-Acta-de-Inicio-Grupo-de-Trabajo-Encarnacion-1.pdf"
        },
    ]
    const right =[
        {
            text:"Nota Reversal entre cancilleres Arg – Py",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/07-Nota-Reversal-entre-cancilleres-Arg-Py-1.pdf"
        },
        {
            text:"INFORME PARCIAL ETAPA I Resultados y Conclusiones – PARCIAL 1 AL 10",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/08-INFORME-PARCIAL-ETAPA-I-Resultados-y-Conclusiones-PARCIAL-1-AL-10-1.pdf"
        },
        {
            text:"MINUTA DE REUNIÓN AYOLAS – PARAGUAY 13-01-2020",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/09-MINUTA-DE-REUNION-AYOLAS-PARAGUAY-13-01-2020-1.pdf"
        },
        {
            text:"2da Declaración de Emergencia Abril 2020",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/10-2da-Declaracion-de-Emergencia-Abril-2020-1.pdf"
        },
        {
            text:"Acta de Reunión y Anexos – Grupo de Trabajo Encarnación – 18-05-2020",
            download:"https://comip.org.ar/wp-content/uploads/2020/07/10-Acta-de-Reunión-y-Anexos-Grupo-de-Trabajo-Encarnación-18-05-2020_compressed-1.pdf"
        },
        {
            text:"ACTA FINAL Reunión Plenaria Grupo de Trabajo Encarnación 25-06-2020",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/11-ACTA-FINAL-Reunion-Plenaria-Grupo-de-Trabajo-Encarnacion-25-06-2020-1.pdf"
        },
    ]
    return(
        <>
            <div className="subsection-title" >Documentación oficial</div>
            <br/>
            <br/>
            <div className="dl-table-container" >
                <SingleTable list={left} />
                <SingleTable list={right} />
            </div>
        </>
    )
}

export default TramoDocum