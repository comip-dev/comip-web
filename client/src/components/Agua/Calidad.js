import React from "react";
import { useNavigate } from "react-router-dom";
import ItatiSlider from "../Proyectos/ItatiSlider";
import Slider from "../Slider";
import './Calidad.css'
const Calidad = () =>{
    const navigate = useNavigate()
    const goTo = (to) =>{
        navigate(`/subtramo/${to}`)
    }
    const newArray = new Array(26).fill(null)
    const slides =newArray.map((item,i)=>`/images/El agua/4_Calidad del agua/Galería de imágenes/${i+1}.jpg`)
    return(
        <>
            <p><strong>Para una relación responsable con el río, la calidad del agua es fundamental.<br/>Por el desarrollo sostenible del recurso y para los diferentes usos que se hagan de él.</strong></p>
            <br/>
            <p><strong>Programa Actual</strong></p>            
            <p>› Evaluar tendencias temporales y espaciales de la calidad del recurso en el Tramo Compartido.</p>
            <p>› Se colectan muestras en ambas márgenes del Río. En sitios que obedecen a incidencias puntuales o difusas que pudieran afectar la calidad del agua.</p>
            <p>› Son siete (7) las estaciones de muestreo aguas arriba de la presa Yacyretá. Desde el Punto Tripartito hasta la desembocadura del Arroyo Pirapó (Py).</p>
            <p>› Se realizó un trabajo exploratorio (2019-2020) para incorporar estaciones aguas abajo de la presa Yacyretá. Se seleccionaron dos (2) estaciones de muestreo, Itatí y Paso de la Patria.</p>
            <p>› Se mide temperatura, pH, oxígeno disuelto, conductividad, nutrientes, entre otros. También compuestos orgánicos y metales.</p>
            <br/>
            <p><strong>Datos Históricos</strong></p>
            <p>› Datos históricos de calidad de agua desde el año 1982 hasta la actualidad.</p>
            <p>› En el año 2015 se redefinen los objetivos, frecuencias y parámetros medidos en el tramo aguas arriba de Yacyretá. Con el asesoramiento y participación de la Facultad de Ciencias Exactas, Químicas y Naturales (FCEQyN) de la UnaM. <a href="https://comip.org.ar/wp-content/uploads/2018/11/parametros.pdf">CLICK AQUÍ</a></p>
            <p>› En el año 2019 se firma el Acta de Inicio del Proyecto ´´Monitoreo Calidad de Agua – Subproyecto del Tramo Yacyretá-Confluencia Río Paraguay´´ con la Universidad Nacional del Nordeste (UNNE).</p>
            <p>› Se plantean tres transectas en Yahapé, Itatí-Ita Corá y Paso de la Patria-Paso Patria. Con once (11) estaciones de muestreo. Se elabora cartografía de la cuencas de aporte al Tramo.</p>
            <p><strong>Integración</strong></p>
            <p>› Se plantea una red de monitoreo única para ambas márgenes del Tramo. En cooperación con la Entidad Binacional Yacyretá.</p>
            <p>› Un trabajo coordinado, de unificación de criterios, técnicas de muestreo, frecuencias y sitios a monitorear</p>
            <p>› La EBY cuenta con estaciones en el sistema Río – Embalse – Río. Fundamentalmente en la zona del embalse principal y los subembalses.</p>
            <p>› La COMIP aporta información sobre sitios aguas arriba y aguas abajo del Embalse.</p>
            <p>› Los datos son cargados en GNoma. Un software diseñado por profesionales de la EBY que permite el análisis espacial y temporal entre estaciones.</p>
            <div className="calidad-btns-container" >
                <div className="cal-btns-content" >
                    <div onClick={()=>goTo('abajo')} className="calidad-btn" >Subtramo Aguas Abajo</div>                
                    <div onClick={()=>goTo('arriba')} className="calidad-btn" >Subtramo Aguas Arriba</div>                
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="final-slider-container" >
                <div className="slider-content" >
                    <ItatiSlider slides={slides}/>
                </div>
            </div>
            <div className="final-slider-height" ></div>
            
        </>
    )
}

export default Calidad