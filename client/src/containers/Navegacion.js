import React from 'react'
import {  useParams } from "react-router-dom";
import Comercial from '../components/Navegacion/Comercial';
import Determinantes from '../components/Navegacion/Determinantes';
import Encarnacion from '../components/Navegacion/Encarnacion';
import Esclusa from '../components/Navegacion/Esclusa';
import Puertos from '../components/Navegacion/Puertos';
import TramoNav from '../components/Navegacion/TramoNav';
import Trayectos from '../components/Navegacion/Trayectos';
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
            content:Trayectos
        },
        encarnacion:{
            headingPic:"/images/Navegacion/1_Tramo COMIP/3_Grupo de trabajo Encarnación/Encabezado.png",
            title:"Grupo de trabajo Encarnación",
            content:Encarnacion
        },
        determinantes:{
            headingPic:"/images/Navegacion/2_Determinantes/Encabezado.png",
            title:"Determinantes",
            content:Determinantes
        },
        comercial:{
            headingPic:"/images/Navegacion/3_Transporte fluvial/1_Tráfico comercial/Encabezado.png",
            title:"Tráfico comercial",
            content:Comercial
        },
        esclusa:{
            headingPic:"/images/Navegacion/3_Transporte fluvial/2_Esclusa de Yacyretá/Encabezado.png",
            title:"Esclusa de Yacyretá",
            content:Esclusa
        },
        puertos:{
            headingPic:"/images/Navegacion/3_Transporte fluvial/3_Puertos/Encabezado.png",
            title:"Puertos",
            content:Puertos
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