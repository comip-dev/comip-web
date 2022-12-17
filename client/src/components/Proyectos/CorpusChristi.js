import React from "react";
import './CorpusChristi.css'

const CorpusChristi = () =>{
    const libros = [
        {
            img:"/images/Proyectos/3_Corpus Christi - Situación actual/portada de archivo 1.png",
            link:"https://comip.org.ar/wp-content/uploads/2020/11/Sintesis-Ejecutiva_compressed.pdf"
        },
        {
            img:"/images/Proyectos/3_Corpus Christi - Situación actual/portada de archivo 2.png",
            link:"https://comip.org.ar/wp-content/uploads/2020/11/Sintesis-Ejecutiva-en-ingles_compressed-1.pdf"
        },
    ]
    return(
        <>
            <p><strong>Una actualización que describe las características ambientales y los beneficios para la navegación, el turismo y el crecimiento.</strong></p>
            <p>Conclusiones actualizadas sobre el potencial hidráulico del río en las zonas analizadas. Con varios emplazamientos alternativos:<br/>Itacuá (PF km 1597); Itacurubí (PF km 1642) y Pindo-í (PF km 1658)<br/>Basadas en estudios anteriores realizados desde 1983.<br/>Evaluaciones de la viabilidad técnica, económica y ambiental de un aprovechamiento multipropósito.</p>
            <p>› Para generar energía limpia y renovable tanto para Argentina como para Paraguay.</p>
            <p>› Para mejores condiciones de navegación.</p>
            <p>› Para promover el desarrollo socioeconómico de la región.</p>
            <p>› Para valorar la pesca responsable y sustentable tanto comercial como recreativa.</p>
            <p>› Para fomentar el turismo y otras actividades comerciales y productivas.</p>
            <p>Estudios de nivel prefactibilidad, factibilidad y proyecto ejecutivo.<br/>Que permiten definir posibilidades ambientales, sociales y económicas a partir de exhaustivos análisis.</p>
            <p>› Que incluyen evaluaciones de desarrollo y crecimiento.</p>
            <p>› Que proponen un conjunto de conclusiones para definir un Proyecto Básico y un Plan de Gestión</p>
            <p>› Ambiental (PGA) y que detalle un programa de obras de compensación y resarcimiento.</p>
            <p>› Ad referendum de los ciudadanos de la provincia de Misiones.</p>
            <p>› Con el consenso de las autoridades provinciales, regionales e internacionales, integradas además a planes de desarrollo.</p>
            <p>› Pensadas para la introducción de nuevas actividades productivas.</p>
            <p>› Que potencien planes de desarrollo regional vinculados o no al aprovechamiento específico.</p>
            <p>Trabajo realizado por instrucciones de los gobiernos de la República Argentina y la República del Paraguay.<br/>COMIP como responsable del desarrollo del proyecto encomendó estudios alternativamente a Consorcio Lameyer- Harza<br/>y Asociados; a Knight Piesold; a Consorcio Harza-IATASA y Tecma ; y a los Ingenieros Juan José Bossio y Oscar Vardé.</p>
            <p><strong>Con un premisa fundamental: todo a favor del río, la región y su gente.</strong></p>
            <br/>
            <br/>
            <div className="publicaciones-container" >
            {/* {
                libros.map(item=>{
                    return(
                        <div  className='proy-container' >
                            <img className='proy-img' src={item.img} alt="estadistica trafico comercial" />
                            <a href={item.link} target='blank' >
                                <div className='proy-overlay' >
                                    <span class="material-symbols-outlined">download</span>
                                    <div>Descargar PDF</div>
                                </div>
                            </a>
                        </div>
                    )
                })
            } */}
            <div className="esp-libros-container" >
                <div className="esp-libros-title" >Síntesis Ejecutiva</div>                
                <p className='libros-line-separator' ></p>                
                <div className="libros-list" >
                    <div className="libro-cont" >
                        <div className="libro-title" >(Español)</div>
                        <a href="https://comip.org.ar/wp-content/uploads/2020/11/La-Fauna-Ictica-del-Rio-Parana_compressed-1.pdf" target='blank'>
                            <img src="/images/Proyectos/3_Corpus Christi - Situación actual/Recurso1.png" alt="portada de libro" />
                        </a>
                    </div>
                    <div className="libro-cont" >
                        <div className="libro-title" >(Inglés)</div>
                        <a href="https://comip.org.ar/wp-content/uploads/2020/11/GuiadelospecesdelParqueNacionalPre-Delta__AlmirnCasciottaCiotekyGiorgis2015_compressed-1.pdf" target='blank'> 
                            <img src="/images/Fauna/2_Especies/Libro02.png" alt="portada de libro" />
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default CorpusChristi