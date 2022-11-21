import React from "react";
import './TramoButtons.css'

const TramoButtons = () =>{
    const list = [
        {
            title:"Proceso de puesta en valor de la información histórica",
            description:"<p>En una primera instancia en la formulación de un plan estratégico acorde a las necesidades planteadas, la COMIP ha iniciado un proceso de puesta en valor de la información histórica y actual permitiendo, por ejemplo, la identificación de dos sectores o subtramos con características claramente diferentes en el tramo compartido. En efecto, las condiciones de escurrimiento, del material del lecho y de la morfología en planta del  río, entre otros aspectos, hicieron necesario un enfoque distinto para el subtramo aguas arriba del embalse de Yacyretá, es decir desde Yacyretá hasta Iguazú, del que se desarrolla aguas abajo de la represa hasta Confluencia (Km 1240).</p><p>Es importante destacar que este Tramo históricamente siempre ha registrado una gran actividad de tráfico comercial fronterizo. Esta actividad ha sostenido el desarrollo de pequeños puertos de amarre y muelles, según los tipos de embarcaciones.</p>"
        },
        {
            title:"Conformación del Grupo de Trabajo Encarnación",
            description:"<p>De esta forma, el 25 de junio de 2019, en la Ciudad de Encarnación, Capital del Departamento de Itapuá, se llevó a cabo un encuentro de Organismos, Organizaciones, Instituciones Públicas y Privadas y Cámaras Empresariales, a fin de presentar el documento “La Navegación de Carga en el Río Paraná Tramo Iguazú – Confluencia Río Paraguay”, siendo la base inicial de información para promover un espacio de trabajo que involucre a los organismos nacionales con competencia en el Tramo, a instituciones académicas vinculadas al conocimiento y la investigación de los temas propios, entidades nacionales o binacionales de la región, y otras organizaciones o asociaciones del sector privado con intereses en la mejora de la navegación y la promoción de la misma. Este grupo y la designación del rol de la COMIP como coordinadora para el seguimiento, ejecución y alcance en la articulación público-privada de los actores de ambas márgenes fue ratificado en Julio 2019.</p><p>En una posterior instancia, esta Comisión conforme a las competencias de administradora fluvial, y en coordinación con las instituciones competentes, impulsó un estudio técnico para la identificación de pasos críticos y para la realización de obras de dragado. Autoridades de Cancillería de ambos países, Administración Nacional de Navegación y Puertos de la República del Paraguay, Subsecretaria de Puertos, Vías Navegables y Marina Mercante de la República Argentina, Prefectura Nacional Argentina, Prefectura General Naval Paraguay y las dos Delegaciones de la Comisión Mixta del Río Paraná, suscribieron mediante acta Nro. 01-2019, el inicio de la Etapa I – Medición de Campo y aprobando el Grupo de Trabajo Encarnación – Navegación tramo compartido del Río Paraná (Argentina – Paraguay), dando comienzo a la realización de estudios y análisis, para luego iniciar con las obras de Dragado para la mejora de la vía navegable.</p>"
        },
        {
            title:"Camino a la mejora de la vía navegable",
            description:"<p>Con la dirección de COMIP, la coordinación Técnica de la ANNP y la SSPVNyMM, el 8 de noviembre se dieron inicio a las Mediciones de Campo. Dichas tareas tuvieron como horizonte el recorrido y relevamiento completo de la vía navegable, desde Yacyretá hasta la Confluencia del Río Paraguay.</p><p>Los técnicos establecieron con información de base y datos de navegación, la existencia de dieciocho (18) trayectos complejos para navegación. Estos trayectos fueron delimitados en sus kilometrajes y situaciones de pasos críticos. Se procedió a relevarlos con sondeos batimétricos para así determinar el estado de los canales de navegación y la situación del sistema de señalamiento. Los sucesivos registros de aguas bajas que superaban las medias históricas en sus niveles mínimos y las proyecciones meteorológicas que indicaban que se extenderán en el tiempo, generaron condiciones que dificultaban la salida de la producción regional con fuerte incidencia en los costos de transporte e incluso pérdidas significativas para los productores y operadores.</p><p>En ese marco, la Comisión Mixta del Río Paraná declaró el estado de emergencia para la navegación al tramo del río Paraná y en vista de la necesidad de garantizar las condiciones de navegabilidad del río Paraná, sugirió encarar acciones de dragado y mejoramiento de los pasos críticos, identificados como prioritarios en los estudios del Grupo de Trabajo Encarnación. Reuniones posteriores entre las representaciones diplomáticas como así también nota suscripta por el Vicecanciller de Paraguay, al señor Subsecretario de Asuntos de América de la Cancillería Argentina, dieron cuenta de la necesidad urgente de la atención de la situación de emergencia de la vía navegable.</p>"
        }
        
    ]
    const falseState=list.map(item=>false)
    const [showQuestions, setShowQuestions] = React.useState(falseState)
    const toggleShow = (i) =>{
        const currentState=showQuestions[i]
        console.log(currentState)
        let items = [...falseState]
        console.log(items)
        items[i] = !currentState
        setShowQuestions(items)
        console.log(showQuestions)
    }
    return(
        <>
        {
            list.map((convenio,index)=>{
                return (
                    <div className="convenio-container" >
                        <div onClick={()=>toggleShow(index)} className={showQuestions[index]?"tramo-btn-active":"tramo-btn"} >
                            <div >{convenio.title}</div>
                            <span class="material-symbols-outlined">add</span>
                        </div>
                        <div  className={showQuestions[index]?"tramo-description-show":"tramo-description"} dangerouslySetInnerHTML={{__html: convenio.description}} >
                            
                        </div>
                        
                        
                    </div>
                )
            })
        }
        

        </>
    )
}
export default TramoButtons