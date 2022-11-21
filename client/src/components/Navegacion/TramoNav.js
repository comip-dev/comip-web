import React from "react";
import Slider from "../Slider";
import TramoButtons from "./TramoButtons";
import TramoDocum from "./TramoDocum";
import Tramolist from "./Tramolist";

const TramoNav = () =>{
    const newArray = new Array(12).fill(null)
    const slides = newArray.map((item,i)=>{
        return `/images/Navegacion/1_Tramo COMIP/1_Navegación tramo COMIP/Galeria_${i+1}.jpeg`
    })
    return(
        <>
            <p>› Con una extensión de 687 kilómetros, desde la desembocadura del río Iguazú hasta su confluencia con el río Paraguay. El desplazamiento de cargas en el río Paraná permite el transporte de gran volumen a bajo costo.</p>
            <p>› La dinámica particular de su cauce principal hace que el lecho se modifique continuamente.</p>
            <p>› Ejecución de acciones destinadas a la promoción del uso de la vía navegable con una navegación segura y económicamente sustentable.</p>
            <p>› Obras de dragado.</p>
            <p>› Visión a futuro. Objetivos 2020 – 2022.</p>
            <p> El Paraná integra la Cuenca del Plata, cuyo territorio concentra la más importante actividad económica, y la mayor cantidad y densidad de población de Sudamérica. Forma parte de dos sistemas hídricos de gran importancia para el transporte fluvial, los cuales desembocan en el Río de La Plata proporcionando salida al océano.</p>
            <p>› La Hidrovía Paraná – Paraguay por el cual Cinco son los países comparten este sistema fluvial: Argentina, Bolivia, Brasil, Paraguay y Uruguay.</p>
            <p>› La Hidrovía Paraná-Tietê es un medio de comunicación fluvial que une zonas muy importantes de Sudamérica desde el punto de vista económico, como son los Estados de San Pablo y Paraná en Brasil con todo el litoral argentino y la República del Paraguay.</p>
            <div className="subsection-title" >Navegación Tramo COMIP</div>
            <p>La vía navegable del Tramo Compartido tiene una extensión de 687 kilómetros, encontrando en sus extremos la Confluencia del Río Paraguay al sur, y la presa de Itaipú al norte. La navegación del tramo es reconfigurada de acuerdo a la ubicación de la presa, continuando al norte sobre la red brasileña de la Hidrovía Paraná-Tietê. En referencia a dicha presa y de acuerdo al llenado del embalse Yacyretá (cota 83,0 msnm en eje Posadas – Encarnación), la navegación en el subtramo Posadas (km 585) – Puerto Iguazú (km 1927) ha mejorado notablemente en términos de calado. El Paraná es el río más importante del sistema de la Cuenca del Plata, por su caudal, por la extensión de su área tributaria, y por la vinculación de las dos mayores áreas económicas  del subcontinente: por un lado, el Estado de São Paulo, en el norte y, por el otro, el eje fluvial industrial Santa Fe-La Plata en el sur, convirtiéndola en la principal vía de integración del Mercosur. El desplazamiento de cargas en el río Paraná permite el transporte de gran volumen a bajo costo, el tránsito de embarcaciones de disímiles características, la economización de combustible y por consecuencia, menor impacto ambiental.</p>
            <p>Este tipo de medio de transporte por vía fluvial, al encontrarse acompañadas por las condiciones hidrológicas y climáticas adecuadas, resulta la opción más conveniente, en relación con otras modalidades de transporte. En la vía navegable del tramo COMIP, las condiciones naturales adversas, y aquellas condiciones de navegabilidad en el subtramo aguas abajo de Yacyretá influenciadas por la propia dinámica del río y los caudales erogados por el Brazo Principal y del Brazo Aña Cuá de la presa Yacyretá, actúan como factores que pueden modificar esta conveniencia.</p>
            <p>La dinámica particular de su cauce principal hace que el lecho se modifique continuamente, y de acuerdo a la instalación de bancos de depósitos nuevos, la corriente fluvial experimenta variaciones, trasladándose varios kilómetros hacia aguas abajo. La necesidad de seguimiento de la evolución mediante mediciones y estudios efectuados por parte de la ANNP y la SPVNyMM, bajo coordinación de la COMIP, cómo así la permanente reubicación de señales, surge en atención a dichos procesos de erosión y deposición asociados a la dinámica antes nombrada.</p>
            <p>La COMIP en el marco de sus competencias, y de acuerdo a la creciente demanda de transporte fluvial en consonancia con el desarrollo de la región ribereña del Tramo, el consecuente crecimiento de los volúmenes de carga, la incorporación de embarcaciones que permiten el transporte de dichos volúmenes competitivos con otros medios, más el desarrollo estratégico de ambos países, ha recibido requerimientos por parte de las autoridades nacionales y de los usuarios de la vía navegable para atender con mayor presura el estado de la vía navegable.</p>
            <p>Es por ello que la COMIP se encuentra coordinando a nivel binacional la ejecución de acciones destinadas a la promoción del uso de la vía navegable con una navegación segura y económicamente sustentable, como así al análisis de las opciones disponibles para mejorarla.</p>
            <TramoButtons/>
            <p>El 25 de junio del 2020, a un año de la creación de este Grupo de Trabajo Binacional, se llevó adelante una reunión plenaria a fin de repasar los avances relacionados a los objetivos planteados en su creación en referencia a la mejora y promoción de la vía navegable. Asimismo, se plantearon los nuevos objetivos 2020-2022:</p>
            <Tramolist/>
            <div className="final-slider-container" >
                <div className="slider-content" >
                    <Slider slides={slides}/>
                </div>
            </div>
            <div className="final-slider-height" ></div>
            <TramoDocum/>
        </>
    )
}

export default TramoNav