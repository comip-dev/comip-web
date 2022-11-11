import React, { useState } from "react";
import imgAlto from '../../assets/images/rio/2_Río Paraná/alto.jpg'
import imgDelta from '../../assets/images/rio/2_Río Paraná/delta.jpg'
import imgInferior from '../../assets/images/rio/2_Río Paraná/inferior.jpg'
import imgMedio from '../../assets/images/rio/2_Río Paraná/medio.jpg'
import './ParanaStretches.css'
const ParanaStretches = () =>{
    const stretches={
        alto:{
            title:"Alto Paraná",
            text:"Comprende los primeros 1550 km del río, desde su nacimiento hasta la confluencia con el río Paraguay. En este trayecto atraviesa el macizo de Brasilia, por lo que es un río de meseta, que discurre sobre un lecho rocoso, entre barrancas que se van distanciando progresivamente entre sí. En épocas pasadas presentaba gran cantidad de saltos de agua y rápidos que han sido aprovechados para construir embalses y represas, como las de Itaipú y Yacyretá. Tras la represa de Yacyretá, el río presenta una clara dirección hacia el oeste, para ensancharse progresivamente y ramificarse en varios canales que forman gran cantidad de islas fluviales hasta unirse frente a Paso de la Patria con el río Paraguay. Su ancho es variable. Luego de unirse con el Paraguay, el río desciende con leve pendiente hasta la desembocadura y disminuye su ancho.",
            img:imgAlto
        },
        medio:{
            title:"Paraná Medio",
            text:"Comprende unos 722 km desde la confluencia con el río Paraguay por el norte hasta la ciudad de Diamante en el sur, donde comienza el predelta. Al unirse con el Paraguay, el curso del río vira bruscamente hacia el sur, a lo largo de una falla geológica ocupada por el ancho valle de inundación, convirtiéndose en un río de llanura con gran cantidad de meandros, islas fluviales y bancos de arena.<br/>El río ahora es de curso lento, sobre un lecho limoso y sus aguas transportan gran cantidad de sedimentos provenientes de las estribaciones andinas fuertemente erosionadas por los ríos Bermejo, Pilcomayo y sus tributarios.<br/>El valle de inundación está limitado por barrancas en la margen izquierda, mientras que en la margen derecha, sus costas son bajas y anegadizas con numerosos riachos y lagunas que se inundan en época de crecientes. A partir de la ciudad de Santa Fe, la margen barrancosa es la derecha y la baja y anegadiza, la izquierda, en territorio de la provincia de Entre Ríos.<br/>Principales afluentes: por la margen izquierda, Santa Lucía, Corriente y Guayquiraró. Por la margen derecha, Paraguay, Negro y Salado.",
            img:imgMedio
        },
        inferior:{
            title:"Curso Inferior",
            text:"El Curso Inferior se extiende desde la ciudad de Diamante hasta la confluencia con el río Uruguay. En este tramo la barranca se interna en la provincia de Entre Ríos constituyendo la «barranca muerta» que enmarca el norte del Delta. El río ha ensanchado su perfil transversal, siguiendo una dirección este – sudeste, y se abre paso entre las barrancas muertas, llamadas así porque el agua solo llega a ellas en las grandes crecientes y las barrancas activas de la Pampa ondulada, cortadas por una serie de pequeños cursos de aguas que se originan a pocos km de su desembocadura.<br/>De la orilla entrerriana le llegan los ríos Victoria y Nogoyá, que unen sus aguas en un laberinto de islas formando una ribera baja y anegadiza. Frente a las islas Lechiguanas, que son las de mayor extensión, desemboca el río Gualeguay. Con el material que transporta va dando forma a numerosas islas que se presentan en este tramo, separadas por los brazos del mismo río. También sobre la margen izquierda recibe numerosos afluentes, entre ellos el arroyo de Las Conchas, el Ensenada, y formando el delta los brazos fluviales: Paraná Pavón, Paraná Ibicuy, Paraná Miní, Paraná Bravo, Paraná Guazú, apoyo del límite interprovincial y Paraná de Las Palmas en territorio bonaerense.",
            img:imgInferior
        },
        delta:{
            title:"Delta del Paraná",
            text:"A unos 320 km de su desembocadura se inicia el delta, que abarca una extensa zona de 14 100 km² entre las provincias argentinas de Buenos Aires y Entre Ríos. Tiene un ancho que varía entre los 18 y los 61 km y se caracteriza por el avance frontal debido a la extraordinaria cantidad de sedimentos que transporta. El delta está constituido por numerosas islas cruzadas por un sinnúmero de brazos, riachos y canales por los que se descarga al Río de la Plata el espectacular derrame de la cuenca del Paraná.<br/>El delta constituye una zona de características peculiares y rica en biodiversidad. Sin embargo, por el efecto combinado de las crecidas del Paraná y del Uruguay, más las crecidas de las mareas del Río de la Plata debido a vientos del SE que lo convierten en una zona inundable, tiene baja densidad de población.",
            img:imgDelta
        },
    }
    const [state,setState] = useState(stretches["alto"])

    return(
        <>
        <div className="stretches-background" >
            <div className="stretches-content-container" >
                <div className="stretches-buttons-container" >
                    {
                        Object.entries(stretches).map(entry=>{
                            return(
                                <div className={entry[1].title===state.title?"stretches-button sbactive":"stretches-button"} onClick={()=>{setState(entry[1])}}>{entry[1].title}</div>
                            )
                        })
                    }
                </div>
                <div className="stretches-container" >
                    <p dangerouslySetInnerHTML={{__html:state.text}}/>
                    <img src={state.img} alt="" loading="lazy" />
                </div>
            </div>
        </div>
        </>
    )
}

export default ParanaStretches