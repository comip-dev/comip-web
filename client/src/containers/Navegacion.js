import React from 'react'
import {  useParams } from "react-router-dom";
import TramoNav from '../components/Navegacion/TramoNav';
import Section from '../components/Section';

const Navegacion = () => {
    const sections ={
        navegacion:{
            headingPic:"/images/Navegacion/1_Tramo COMIP/1_Navegación tramo COMIP/Encabezado-06.png",
            title:"Navegación",
            content:TramoNav
        },
        trayectos:{
            headingPic:"/images/Navegacion/1_Tramo COMIP/2_Trayectos/Encabezado.png",
            title:"Trayectos",
            content:""
        },
        encarnacion:{
            headingPic:"/images/Navegacion/1_Tramo COMIP/3_Grupo de trabajo Encarnación/Encabezado.png",
            title:"Grupo de trabajo Encarnación",
            content:""
        },
        determinantes:{
            headingPic:"/images/Navegacion/2_Determinantes/Encabezado.png",
            title:"Determinantes",
            content:""
        },
        comercial:{
            headingPic:"/images/Navegacion/3_Transporte fluvial/1_Tráfico comercial/Encabezado.png",
            title:"Tráfico comercial",
            content:""
        },
        esclusa:{
            headingPic:"/images/Navegacion/3_Transporte fluvial/2_Esclusa de Yacyretá/Encabezado.png",
            title:"Esclusa de Yacyretá",
            content:""
        },
        puertos:{
            headingPic:"/images/Navegacion/3_Transporte fluvial/3_Puertos/Encabezado.png",
            title:"Puertos",
            content:""
        },
        publicaciones:{
            headingPic:"/images/Navegacion/4_Publicaciones/Encabezado.png",
            title:"Libros Publicados",
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

export default Navegacion