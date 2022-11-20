import React from "react";
import SingleTable from "./SingleTable";
import './DownloadTable.css'
const DownloadTable = () =>{
    const leftCities= [
        {
            city:"Eldorado",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Eldorado.pdf",
        },
        {
            city:"Capitán Meza",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Capitán-Meza.pdf",
        },
        {
            city:"Puerto Maní",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Puerto-Maní.pdf",
        },
        {
            city:"Posadas",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Posadas.pdf",
        },
        {
            city:"San Cosme y Damián",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/San-Cosme-y-Damián.pdf",
        },
        {
            city:"Ituzaingó",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Ituzaingó.pdf",
        },
        {
            city:"Ayolas",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Ayolas.pdf",
        },
    ]
    const rightCities= [
        {
            city:"Corateí",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Corateí.pdf",
        },
        {
            city:"Itá Ibaté",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Itá-Ibaté.pdf",
        },
        {
            city:"Cerrito",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Cerrito.pdf",
        },
        {
            city:"Itatí",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Itatí.pdf",
        },
        {
            city:"Itá Corá",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Itá-Corá.pdf",
        },
        {
            city:"Paso de la Patria",
            download:"https://comip.org.ar/wp-content/uploads/2019/05/Paso-de-la-Patria.pdf",
        },
        {
            city:".",
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