import React from 'react'
import {  useParams } from "react-router-dom";
import Section from '../components/Section';
import CuencaDelPlata from '../components/Rio/CuencaDelPlata';
import RioParana from '../components/Rio/RioParana';
import headingCuenca from '../assets/images/rio/1_Cuenca del Plata/Encabezado Cuenta del Plata.jpg'
import headingRioParana from '../assets/images/rio/2_Río Paraná/1_Encabezado Río Paraná.jpg'
import headingTramo from '../assets/images/rio/3_El Tramo COMIP/1_Tramo COMIP.jpg'
const Rio = ()=>{
    const sections ={
        cuencadelplata:{
            headingPic:headingCuenca,
            title:"Cuenca del Plata",
            content:CuencaDelPlata
        },
        rioparana:{
            headingPic:headingRioParana,
            title:"La importancia del Río Paraná",
            content:RioParana
        },
        tramocomip:{
            headingPic:headingTramo,
            title:"El Tramo COMIP",
            content:""
        },
    }
    const params = useParams();
    const {seccion} = params
    return(
        <>
            {
                sections[seccion] && <Section 
                headingPic={sections[seccion].headingPic} 
                title={sections[seccion].title}
                children={sections[seccion].content}
                > {sections[seccion].content && sections[seccion].content()} </Section>
            }
            
        </>
    )
}

export default Rio