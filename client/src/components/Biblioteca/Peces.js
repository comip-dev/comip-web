import React from "react";
import SingleTable from "../Informe/SingleTable";
const Peces = () =>{
    const left =[
        {
            text:"EBY_UNNE_UNaM 2016",
            download:"https://comip.org.ar/wp-content/uploads/2018/02/EBY_UNNE_UNaM-2016.pdf"
        },
        {
            text:"EBY -UNNE-UNaM-2013-2014",
            download:"https://comip.org.ar/wp-content/uploads/2018/02/EBY-UNNE-UNaM-2013-2014.pdf"
        },
        {
            text:"EBY_UNNE_UNAM 2013",
            download:"https://comip.org.ar/wp-content/uploads/2018/02/EBY_UNNE_UNAM-2013.pdf"
        },
        {
            text:"EBY_UNNE_UNaM_1999_2012 Integral",
            download:"https://comip.org.ar/wp-content/uploads/2018/06/EBY_UNNE_UNaM_1999_2012-Integra.pdf"
        },
        {
            text:"EBY_UNNE_UNAM 2011",
            download:"https://comip.org.ar/wp-content/uploads/2018/02/EBY_UNNE_UNAM-2011.pdf"
        },
        {
            text:"EBY_UNNE_UNAM 2010",
            download:"https://comip.org.ar/wp-content/uploads/2018/06/EBY_UNNE_UNAM-2010.pdf"
        },
        {
            text:"EBY_UNNE_UNaM 2009",
            download:"https://comip.org.ar/wp-content/uploads/2018/02/EBY_UNNE_UNaM-2009.pdf"
        },
        {
            text:"EBY_ UNNE_UNaM 2008",
            download:"https://comip.org.ar/wp-content/uploads/2018/02/EBY_-UNNE_UNaM-2008.pdf"
        },
        
    ]
    const right =[
        {
            text:"EBY_UNNE_UNaM 2007",
            download:"https://comip.org.ar/wp-content/uploads/2018/02/EBY_UNNE_UNaM-2007.pdf"
        },
        {
            text:"EBY_UNNE_UNaM 1999_2006 Integra",
            download:"https://comip.org.ar/wp-content/uploads/2018/02/EBY_UNNE_UNaM-1999_2006-Integra.pdf"
        },
        {
            text:"EBY_UNNE_UNaM 2005",
            download:"https://comip.org.ar/wp-content/uploads/2018/02/EBY_UNNE_UNaM-2005.pdf"
        },
        {
            text:"EBY_UNNE_UNaM 2003",
            download:"https://comip.org.ar/wp-content/uploads/2018/02/EBY_UNNE_UNaM-2003.pdf"
        },
        {
            text:"EBY_UNNE_UNaM 2002",
            download:"https://comip.org.ar/wp-content/uploads/2018/02/EBY_UNNE_UNaM-2002.pdf"
        },
        {
            text:"EBY_UNNE_UNaM 2001",
            download:"https://comip.org.ar/wp-content/uploads/2018/02/EBY_UNNE_UNaM-2001.pdf"
        },
        {
            text:"EBY_UNNE_UNaM 2000",
            download:"https://comip.org.ar/wp-content/uploads/2018/02/EBY_UNNE_UNaM-2000.pdf"
        },
        {
            text:".",
            download:""
        },
        
    ]
    return (
        <>
            <div className="normativas-title" >Estudios sobre instalaciones para peces de EBY</div>
            <div className="separator-auth-line" ></div>
            <div className='informe-content' >
                <p>El río Paraná cuenta con especies de peces que se comportan como migradoras río arriba, desplazándose principalmente con fines reproductivos pudiendo llegar en algunos casos hasta las cabeceras de sus afluentes.</p>
                <p>Los sistemas de transferencia permiten que dichos peces superen las barreras que representan las represas para sus desplazamientos. La evaluación y monitoreo de la fauna íctica en los pasajes permite analizar la eficiencia de las escalas en el contexto de la conservación de los recursos naturales.</p>
                <p>A continuación, se presentan estudios de la fauna íctica transferida en las instalaciones para peces de la Central Hidroeléctrica Yacyretá, durante el intervalo correspondiente a los años 1999 – 2016.</p>
                <br/>
                <div className="dl-table-container" >
                <SingleTable list={left} />
                <SingleTable list={right} />
            </div>
            </div>
        </>
    )
}

export default Peces