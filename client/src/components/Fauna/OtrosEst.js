import React from "react";
import { useNavigate } from "react-router-dom";
import OtrosCard from "./OtrosCard";
import './OtrosEst.css'
const OtrosEst = () => {
    const navigate = useNavigate()
    const goToIction = ()=>{
        navigate('/biblioteca/ictioplancton')
    }
    const goToPeces = ()=>{
        navigate('/biblioteca/peces')
    }
    const list=[
        {
            title:"Recopilación",
            subtitle:"Instalaciones de pasaje de peces",
            img:"/images/Fauna/3_Estudios/3_OtrosEstudios/1-Recopilación.png",
            biblioteca:true,
            action:goToIction
        },
        {
            title:"Instalaciones de pasaje de peces",
            subtitle:"",
            img:"/images/Fauna/3_Estudios/3_OtrosEstudios/2-Instalaciones de pasaje de peces.png",
            biblioteca:true,
            action:goToPeces
        },
        {
            title:"Links de interés",
            subtitle:"Instituto de Ictiología de la UNNE",
            img:"/images/Fauna/3_Estudios/3_OtrosEstudios/3-Links de interés.png",
            biblioteca:false,
            action:"http://www.vet.unne.edu.ar/inicne/index.htm",
            buttontext:"Ir al sitio"
        },
        {
            title:"Análisis del Marco Legal Regulatorio",
            subtitle:"",
            img:"/images/Fauna/3_Estudios/3_OtrosEstudios/4-Analisis del Marco Legal Regulatorio.png",
            biblioteca:false,
            action:"https://comip.org.ar/wp-content/uploads/2017/06/Marcoregulatorio.pdf",
            buttontext:"Ir al PDF"
        },
    ]
    return(
        <>
            <p>Recopilación de datos sobre estudios, informes y convenios; monitoreos y evaluación de la fauna íctica transferida por las instalaciones para peces de la Entidad Binacional Yacyretá, realizados en conjunto con UNNE (Universidad Nacional del Nordeste) y UNaM (Universidad Nacional de Misiones) y evaluaciones anuales de la situación del ictioplancton en el área de la represa.</p>
            <br/>
            <div className="sitios-container" >
                {list.map(item=>{return <OtrosCard details={item} />})}
            </div>
        </>
    )
}

export default OtrosEst