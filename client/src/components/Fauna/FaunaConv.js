import React from "react";
import { useNavigate } from "react-router-dom";
import {cards} from '../../assets/data/fauna/convenioCards'
import './FaunaConv.css'
const FaunaConv = () =>{
    const navigate= useNavigate()
    const goTo = (route) => {
        navigate(`/${route}`)
    }
    return(
        <>
            <div className="conv-cards-container" >
            {
                cards.map((card)=>{
                    return(
                        <div className={'conv-card-container'} >
                            <div className='conv-carta' >
                                <div className='conv-cara' >
                                    <img className='conv-img' src={card.img} alt="related img"/>
                                </div>
                                <div className='conv-cara cc-detras' >
                                    <a className='convcard-title-back' href={card.pdf} target='_blank' rel="noreferrer nofollow" >
                                    VER + INFO 
                                    </a>
                                </div>

                            </div>
                            <div className='conv-card-title'>Reglamentación vigente</div>
                            <div className='conv-card-title-zone'>{card.zone}</div>
                        </div>
                    )
                })
            }
            </div>
            <br/>
            <div className="subsection" >

                <div className="subsection-title" >La Importancia de los Recursos Ícticos</div>
                <p className="subsection-text" >La conservación de la riqueza ictícola del Río Paraná es un objetivo central de la COMIP. A su vez, es una responsabilidad de los organismos municipales, provinciales, nacionales e internacionales pertinentes. Y su protección debe ser una condición primordial para quienes se relacionan con el Río.</p>
                <p><strong>› Convenio sobre conservación de Fauna Ictica:</strong></p>
                <p>La COMIP es Secretaria Permanente del Convenio sobre conservación y desarrollo de los recursos ícticos en los tramos limítrofes de los ríos Paraná y Paraguay.</p>
                <p>Este convenio cuenta con una normativa estrictamente binacional. Las provincias que se encuentran dentro de la competencia de la COMIP, tienen una normativa específica provincial sobre el tema. Dicha información se puede consultar en el Marco Legal Regulatorio de la Pesca Marítima, Continental y la Acuicultura Argentina, del Consejo Federal de Inversiones.</p>
                <p><strong>› Especies:</strong></p>
                <p>El Río Paraná cuenta con una diversidad de peces, cerca de 200 especies, que representan aproximadamente un tercio del total de especies de toda la Cuenca del Plata. El criterio de selección, se basa en las especies de mayor captura en la región, así como algunas de características biológicas relevantes.</p>
                <p><strong>› Pesca Recreativa:</strong></p>
                <p>El proyecto de Evaluación de la Pesca Recreativa en el Río Paraná en los tramos comunes, busca establecer una metodología que permita obtener información valida acerca de la actividad de pesca deportiva. Se apoya en muestreos periódicos con el fin de generar las bases para el desarrollo de políticas de manejo regional del recurso pesquero</p>
                <p><strong>› Estudios</strong></p>
                <p>Tareas de recopilación de datos, estudios y análisis científicos sobre distintos aspectos relacionados a la vida del Río. Dichos estudios contienen datos propios, de la Entidad Binacional Yacyretá, Universidad del Nordeste, Universidad Nacional de Misiones.</p>
                <br/>
                <br/>
                <div className="subsection-title" >La importancia de una acción integral</div>
                <p>La República Argentina y la República del Paraguay en 1996, suscribieron el Convenio sobre conservación y desarrollo de los recursos ícticos en los tramos limítrofes de los Ríos Paraná y Paraguay, en busca de preservar y conservar los recursos Icticos en dichos ríos, y establecer criterios racionales de pesca, evitar el deterioro ambiental y contaminación de ambos Ríos y sus ecosistemas</p>
                <p>Estos instrumentos han sido ratificados por la Ley N°1.171 de la República del Paraguay y aprobados por la Ley de Argentina N°25.105.</p>
                <p>La COMIP, actúa como Secretaria Permanente del Comité Coordinador. Dicho Comité, se encuentra constituido por dos delegaciones que es presidida por el Ministerio de Relaciones Exteriores de Paraguay y de Argentina, y seis representantes de cada país. A su vez, es asistido por un Consejo Asesor, el cual se encuentra representado por técnicos y científicos en materia de pesca y conservación de la Fauna Íctica, con el objeto de formular propuestas y recomendaciones al Comité.</p>
                <p><strong>Misión y funciones de la Secretaría Permanente:</strong></p>
                <p>›Mantener el inventario y la evaluación estadística de los recursos vivos y de la pesca, a través del procesamiento, análisis y la publicación de información tal como capturas, esfuerzos de pesca y otros datos provistos por organismos afines.</p>
                <p>›Organizar el intercambio de información entre las partes contratantes concerniente a la ejecución de ese Convenio.</p>
                <p>›Preparar y elevar propuestas al Comité Coordinador, relativas a la investigación científica en el área del Convenio.</p>
                <p>›Coordinar la planificación de proyectos de investigación y desarrollo tecnológico sobre la pesca en los Ríos Paraná y Paraguay para ser realizados en forma conjunta o separada por los organismos competentes de las partes contratantes.</p>
                <p>›Coordinar el control y efectuar el seguimiento permanente de las acciones y medidas dispuestas por el Comité Coordinador.</p>
                <p><strong>Misión y funciones del Comité Coordinador:</strong></p>
                <p>›Control de pesca y preservación del recurso íctico.</p>
                <p>›Regulación de la pesca, la conservación y desarrollo de la Fauna Ictica.</p>
                <p>›Regulación de las artes y métodos de pesca.</p>
                <p>›Regulación sobre tamaños y especies de captura de peces.</p>
                <p>›Establecimiento de áreas de reserva o tramos protegidos y sus reglamentos de pesca.</p>
                <p>›Fijación de volúmenes máximos de captura por especie y su ajuste periódico.</p>
                <p>›Mejoramiento y desarrollo de los recursos vivos incluyendo la reproducción artificial de peces y otros organismos.</p>
                <br/>
                <p><strong>Misión y del Consejo Asesor </strong></p>
                <p>›Estará integrado por expertos que reflejen competencias institucional, técnica y científica, nombrados por el Comité Coordinador</p>
                <p>›Para la conformación del Consejo Asesor se buscará la paridad en cuanto al número de miembros de cada país.</p>
                <p>›La convocatoria a las reuniones del Consejo Asesor estará a cargo de la Secretaria Permanente.</p>
                <p>›Formulará y elevará a requerimiento del Comité Coordinador las propuestas y recomendaciones para el cumplimiento de las misiones y funciones previstas en el Art. XI del Convenio.</p>
            </div>
            <div className="faunaconv-buttons" >
                <div onClick={()=>goTo("estudiosdelconvenio")} className="faunaconv-button" >ESTUDIOS DEL CONVENIO</div>
                <div onClick={()=>goTo("normaBilaterales")} className="faunaconv-button" >NORMATIVAS BILATERALES</div>
            </div>
        </>
    )
}
export default FaunaConv