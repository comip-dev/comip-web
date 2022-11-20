import React from "react";
import SingleTable from "./SingleTable";
import './DownloadTable.css'
const DownloadTable = () =>{
    const leftCities= [
        {
            text:"Eldorado",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Eldorado.pdf",
        },
        {
            text:"Capitán Meza",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Capitán-Meza.pdf",
        },
        {
            text:"Puerto Maní",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Puerto-Maní.pdf",
        },
        {
            text:"Posadas",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Posadas.pdf",
        },
        {
            text:"San Cosme y Damián",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/San-Cosme-y-Damián.pdf",
        },
        {
            text:"Ituzaingó",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Ituzaingó.pdf",
        },
        {
            text:"Ayolas",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Ayolas.pdf",
        },
    ]
    const rightCities= [
        {
            text:"Corateí",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Corateí.pdf",
        },
        {
            text:"Itá Ibaté",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Itá-Ibaté.pdf",
        },
        {
            text:"Cerrito",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Cerrito.pdf",
        },
        {
            text:"Itatí",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Itatí.pdf",
        },
        {
            text:"Itá Corá",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Itá-Corá.pdf",
        },
        {
            text:"Paso de la Patria",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Paso-de-la-Patria.pdf",
        },
        {
            text:".",
            download:"",
        },
    ]
    return(
        <>
            <div className="dl-table-container" >
                <SingleTable list={leftCities} />
                <SingleTable list={rightCities} />
            </div>
        </>
    )
}

export default DownloadTable