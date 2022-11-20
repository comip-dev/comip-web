import React from "react";
import SingleTable from "../Informe/SingleTable";
const Ictioplancton = () =>{
    const left =[
        {
            text:"Ictioplancton-UNaM-2016-2017",
            download:"https://comip.org.ar/wp-content/uploads/2018/06/Ictioplancton-UNaM-2016-2017.pdf"
        },
        {
            text:"Ictioplancton-UNaM-2015-2016",
            download:"https://comip.org.ar/wp-content/uploads/2018/06/Ictioplancton-UNaM-2015-2016.pdf"
        },
        {
            text:"Ictioplancton_UNaM_2014",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/Ictioplancton_UNaM_2014.pdf"
        },
        {
            text:"Ictioplancton-UNaM- 2013-2014",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/Ictioplancton-UNaM-2013-2014.pdf"
        },
        {
            text:"Ictiopláncton_UNaM_2013",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/Ictioplancton_UNaM_2013.pdf"
        },
        {
            text:"Ictiopláncton_UNaM_2010",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/Ictioplancton_UNaM_2010.pdf"
        },
        {
            text:"Ictiopláncton_UNaM_2009",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/Ictioplancton_UNaM_2009-1.pdf"
        },
        {
            text:"Ictiopláncton_UNaM_2008",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/Ictioplancton_UNaM_2008.pdf"
        },
        {
            text:"Ictiopláncton_UNaM_2007",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/Ictioplancton_UNaM_2007.pdf"
        },
    ]
    const right =[
        {
            text:"Ictiopláncton_UNaM_2006",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/Ictioplancton_UNaM_2006.pdf"
        },
        {
            text:"Ictiopláncton_UNaM_2005",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/Ictioplancton_UNaM_2005.pdf"
        },
        {
            text:"Ictiopláncton_UNaM_2003",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/Ictioplancton_UNaM_2003.pdf"
        },
        {
            text:"Ictiopláncton_UNaM_2002",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/Ictioplancton_UNaM_2002.pdf"
        },
        {
            text:"Ictiopláncton_UNaM_2001",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/EBY_UNNE_UNaM-2001.pdf"
        },
        {
            text:"Ictiopláncton_UNaM_2000",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/Ictioplancton_UNaM_2000.pdf"
        },
        {
            text:"Ictiopláncton_UNaM_1999",
            download:"https://comip.org.ar/wp-content/uploads/2020/11/Ictioplancton_UNaM_1999_compressed-2.pdf"
        },
        {
            text:"Anexo fotog EBY-UNaM 01",
            download:"https://comip.org.ar/wp-content/uploads/2018/03/Anexo-fotog-EBY-UNaM-01.pdf"
        },
        {
            text:".",
            download:""
        },
    ]
    return (
        <>
            <div className="normativas-title" >Estudios de Ictioplancton</div>
            <div className="separator-auth-line" ></div>
            <div className='informe-content' >
                <p>El ictioplancton es la comunidad que constituyen los huevos y larvas de peces, hasta que alcanzan el tamaño suficiente en que dejan de ser desplazados pasivamente por las corrientes y comienzan a moverse de manera independiente de las mismas.</p>
                <p>Su estudio permite analizar la dinámica poblacional y detectar la existencia o inexistencia de actividad reproductiva, así como comprender el uso del hábitat durante la reproducción y el desarrollo temprano.</p>
                <p>A continuación, se presentan trabajos realizados durante el período 1999-2017.</p>
                <br/>
                <div className="dl-table-container" >
                <SingleTable list={left} />
                <SingleTable list={right} />
            </div>
            </div>
        </>
    )
}

export default Ictioplancton