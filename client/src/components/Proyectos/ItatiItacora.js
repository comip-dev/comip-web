import React from "react";
import Slider from "../Slider";
import ItatiSlider from "./ItatiSlider";

const ItatiItacora = ()=>{
    const newArray = new Array(10).fill(null)
    const slides = newArray.map((item,i)=>`/images/Proyectos/2_Itatí-Itacorá/Galería_${i+1}.jpg`)
    return(
        <>
            <p><strong>Un estudio del río Paraná como factor ambiental, de desarrollo económico y regional y sus beneficios para la navegación, el turismo y el crecimiento. </strong></p>
            <p>Estudio sobre el potencial hidráulico del río, en el tramo binacional desde Yacyretá a la confluencia del río Paraguay. Basado en estudios previos, realizados a partir de 1986. Ahora desarrollados desde una mirada ambiental.Evaluación de la viabilidad técnica, económica y ambiental de un aprovechamiento multipropósito:</p>
            <p>› Para promover el desarrollo económico y social del área de influencia.</p>
            <p>› Para generar energía limpia, renovable e incrementar oferta hidroeléctrica en Argentina.</p>
            <p>› Para mejorar la navegación en el río Paraná.</p>
            <p>› Para actuar como compensador del aprovechamiento hidroeléctrico Yacyretá y flexibilizar sus condiciones de operación.</p>
            <p>› Para recuperar zonas inundables para el desarrollo agropecuario.</p>
            <p>› Para fortalecer y ampliar la integración Argentino Paraguaya.</p>
            <br/>
            <p><strong>Estudio de prefactibilidad como paso previo a un exhaustivo estudio de factibilidad.<br/>Que permite definir posibilidades ambientales, sociales y económicas.<br/>Que proponga desarrollos y alternativas de crecimiento.</strong></p>
            <p>Y contemple un programa un programa de obras de compensación y resarcimiento:</p>
            <p>› Consensuadas con las autoridades regionales e integradas a planes de desarrollo.</p>
            <p>› Ejecutadas en forma anticipada y durante la construcción del proyecto.</p>
            <p>› Gestionadas y construidas con la participación de técnicos y trabajadores de la región.</p>
            <p>› Con sustentabilidad y mantenimientos garantizados, una vez transferidas al dominio provincial o departamental.</p>
            <p>› Pensadas para la introducción de nuevas actividades productivas en la región.</p>
            <p>› Que potencien planes de desarrollo regional vinculados o no al aprovechamiento específico.</p>
            <p><strong>
            Trabajo realizado por instrucciones del Ministerio de Energía y Minería de la República Argentina y del Ministerio de Relaciones Exteriores de la República del Paraguay. COMIP implementó una estructura organizacional con asistencia técnica de EBISA, EBY y equipos de IGN, INA y UNNE. <br/> Y con una premisa fundamental: todo a favor del río, la región y su gente.<br/> COMIP como responsable del desarrollo del proyecto encomendó estudios alternativamente a Consorcio Lameyer- Harza y Asociados; a Knight Piesold; a Consorcio Harza-IATASA y Tecma; y a los Ingenieros Juan José Bossio y Oscar Vardé.
            </strong></p>
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

export default ItatiItacora