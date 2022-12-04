import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../Slider";

const PescaRecreativa = () => {
    const navigate= useNavigate()
    const goTo = (route) => {
        navigate(`/informe/${route}`)
    }
    const newArray = new Array(19).fill(null)
    const slides = newArray.map((item,i)=>{
        return (i===7)? `/images/Fauna/3_Estudios/1_PescaRecreativa/Galería de imágenes/${i+1}.jpeg`:`/images/Fauna/3_Estudios/1_PescaRecreativa/Galería de imágenes/${i+1}.jpg`
    })
    return(
        <>
            <p><strong>Evaluación de la Pesca Recreativa en el río Paraná en el tramo compartido entre Argentina y Paraguay.</strong></p>
            <br/>
            <p><strong>Definición de Pesca Recreativa:</strong></p>
            <p>La pesca deportiva es la actividad deportiva relacionada con el ámbito de la pesca.​ Esta se realiza a nivel personal o en equipo de personas por ocio o competición. Hay diversas técnicas para realizarla y también existen competencias que pueden ser realizadas en ríos, lagunas, orilla del mar y mar abierto. Cuando se realiza en forma deportiva es gestionada por diferentes federaciones de pesca regionales y nacionales, que reglan el uso de artes y aparejos, delimitando el cupo de capturas y su tamaño según especies, e incluso gestionan el uso y actividad de los diferentes hábitats.</p>
            <br/>
            <p><strong>Características de la actividad:</strong></p>
            <p>› La pesca recreativa es una actividad con enorme potencial.</p>
            <p>› Es un motor de crecimiento que genera importantes flujos de empleos y divisas.</p>
            <p>› Representa uno de los principales recursos económicos para las localidades ribereñas.</p>
            <p>› En la Provincia de Corrientes se ha incrementado de modo significativo.</p>
            <br/>
            <p><strong>Desafíos del estudio:</strong></p>
            <p>› Establecer una metodología que permita obtener información válida acerca de la actividad.</p>
            <p>› Generar las bases para el desarrollo de políticas de manejo regionales del recurso pesquero.</p>
            <br/>
            <p><strong>Objetivos del estudio:</strong></p>
            <p>› Determinar los principales patrones espaciales y temporales de variación del esfuerzo de pesca y el rendimiento pesquero.</p>
            <p>› Caracterizar los sitios más importantes de pesca.</p>
            <p>› Estimar parámetros biológicos (crecimiento, mortalidad, etc) a partir de los datos de los ejemplares capturados.</p>
            <p>› Evaluar y recomendar acciones tendientes a la utilización sustentable del recurso íctico.</p>
            <br/>
            <p><strong>Metodología</strong></p>
            <p>› Muestreos en los puertos con mayor afluencia de pescadores.</p>
            <p>› 15 puertos de desembarco ubicados sobre ambas márgenes del tramo.</p>
            <p>› Encuestas a pescadores, guías de pesca, guarderías, entre otros.</p>
            <p>› Recolección periódica de información: volumen de captura, especies y artes de pesca.</p>
            <br/>
            <p><strong>Autores: </strong>Sánchez, Sebastián; Silva, Natalia A.;Barrios, Carlos E.; Gonzáles, Alfredo O.;Aichino, Danilo R.; Masin, Andrés S.; Acosta, José; Florentín, Pedro; Rojas, María T.; Garrido, Gladis; Roux, Juan Pablo.</p>
            <p><strong>Coordinador: </strong>Director de Gestión del Tramo,  Lic. Enrique Guardo.</p>
            <br/>
            <br/>
            <div className="faunaconv-buttons" >
                    <div onClick={()=>goTo("semestre")} className="faunaconv-button" >INFORME SEMESTRAL OCTUBRE 2017 - ABRIL 2018</div>
                    <div onClick={()=>goTo("final")} className="faunaconv-button" >INFORME FINAL OCTUBRE 2017 - OCTUBRE 2018</div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="final-slider-container" >
                    <div className="slider-content" >
                        <Slider slides={slides}/>
                    </div>
                </div>
                <div className="final-slider-height" ></div>
        </>
    )
}

export default PescaRecreativa