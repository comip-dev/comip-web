import React from 'react'
import {  useParams } from "react-router-dom";
import CorpusChristi from '../components/Proyectos/CorpusChristi';
import Energias from '../components/Proyectos/Energias';
import ItatiItacora from '../components/Proyectos/ItatiItacora';
import Section from '../components/Section';

const Proyectos = ( )=>{
    const sections ={
        energias:{
            headingPic:"/images/Proyectos/1_La-energia/Encabezado-Energía.jpg",
            title:"La Energía",
            content:Energias
        },
        itatiItacora:{
            headingPic:"/images/Proyectos/2_Itatí-Itacorá/Encabezados.png",
            title:"Aprovechamiento multipropósito Itatí-Itacorá",
            content:ItatiItacora
        },
        corpusChristi:{
            headingPic:"/images/Proyectos/3_Corpus Christi - Situación actual/Encabezados.png",
            title:"Aprovechamiento multipropósito Corpus Christi",
            content:CorpusChristi
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
export default Proyectos