import React from 'react'
import {  useParams } from "react-router-dom";
import EstudiosConvenio from '../components/Fauna/EstudiosConvenio';
import FaunaConv from '../components/Fauna/FaunaConv';
import Section from '../components/Section';

const Fauna = () => {
    const sections={
        convenio:{
            headingPic:"/images/Fauna/1_Convenio/Encabezado-03.png",
            title:"Convenio",
            content:FaunaConv
        },
        estudiosdelconvenio:{
            headingPic:"",
            title:"Estudios del convenio",
            content:EstudiosConvenio
        },
        especies:{
            headingPic:"/images/Fauna/2_Especies/Encabezado-03.png",
            title:"Especies",
            content:""
        },
        pescarecreativa:{
            headingPic:"/images/Fauna/3_Estudios/1_Pesca Recreativa/Encabezado pezca recreativa.png",
            title:"Pesca Recreativa",
            content:""
        },
        piscicultura:{
            headingPic:"/images/Fauna/3_Estudios/2_Piscicultura/Encabezado-Piscicultura.png",
            title:"Piscicultura",
            content:""
        },
        otros:{
            headingPic:"/images/Fauna/3_Estudios/3_Otros Estudios/Encabezado Otros estudios-05.png",
            title:"Otros estudios",
            content:""
        },
        normaBilaterales:{
            headingPic:"",
            title:"Normativas Bilaterales",
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

export default Fauna