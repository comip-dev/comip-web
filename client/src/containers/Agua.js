import React from 'react'
import {  useParams } from "react-router-dom";
import Calidad from '../components/Agua/Calidad';
import Hidrologia from '../components/Agua/Hidrologia';
import Hidrometeorología from '../components/Agua/Hidrometeorologia';
import Meteorologia from '../components/Agua/Meteorologia';
import Section from '../components/Section';

const Agua = () =>{
    const params = useParams();
    const {seccion} = params
    const sections = {
        hidrometeorologia:{
            headingPic:"/images/El agua/1_Datos de Hidrología/Encabezado.png",
            title:"Hidrometeorología",
            content:Hidrometeorología
        },
        alturas:{
            headingPic:"/images/El agua/1_Datos de Hidrología/Encabezado.png",
            title:"Alturas",
            content:""
        },
        r11:{
            headingPic:"/images/El agua/2_Hidrometeorología/1_Hidrómetros del tramo/Encabezado.png",
            title:"Estación R11",
            content:""
        },
        historicos:{
            headingPic:"/images/El agua/2_Hidrometeorología/2_Datos históricos/Encabezado.png",
            title:"Datos históricos",
            content:""
        },
        meteorologia:{
            headingPic:"/images/El agua/3_Meteorología/Encabezado.png",
            title:"Pronóstico",
            content:Meteorologia
        },
        calidad:{
            headingPic:"/images/El agua/4_Calidad del agua/Encabezado.png",
            title:"Calidad del agua",
            content:Calidad
        },
        
    }
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

export default Agua