import React from "react";
import './TramoButtons.css'

const Tramolist = () =>{
    const list =[
        "1. Luego de finalizado el dragado de Pasos Urgentes, un plan de intervención de los restantes pasos críticos         relevados e identificados.",
        "2. Proyecto ejecutivo para el establecimiento de la zona de operaciones para fraccionamiento de convoyes aguas abajo de la esclusa Yacyretá y a mediano plazo la señalización y balizado de la vía.",
        "3. Señalización y balizamiento de la zona navegable, de acuerdo al relevamiento presentado ante a ANNP y la SPVNyMM.",
        "4. Conformación de un equipo binacional que permita garantizar la observación periódica -monitoreo- de la vía navegable, a fin de anticipar las modificaciones y necesidades de obras, señales, modificaciones de su traza, o cualquier infraestructura para la optimización de la misma.",
        "5. En relación a la promoción de la vía resaltar como pendiente el acuerdo de los países para mejorar la oferta recíproca de bodegas de ambas banderas, hacia los puertos y un reglamento compartido por ambos países con reglas comunes que permitan mejorar la eficiencia de las operaciones",
        "6. Impulsar el desarrollo de la vía navegable y el fortalecimiento de su marco institucional en el ámbito de la Mesa Bilateral de Navegación y Temas Fluviales",
        "7. Dadas las particulares situaciones de bajantes del río y las consecuentes. Declaratorias de Emergencia para la navegación, realizar gestiones ante los organismos nacionales y entidades binacionales para posibilitar vertimientos adicionales de caudales por periodos acotados de tiempo, a fin de permitir un calado mínimo a los convoyes.",
        "8. Dado el ofrecimiento del señor Subsecreatario de Puertos, Vías Navegables y Marina Mercante, coordinar la evaluacion de la Draha 332, apta para operar en zonas rocosas, e impulsar un acuerdo binacional que permita su puesta a punto y posterior uso en el marco de las mejoras de la vía navegable en cuestión.",
        "9. Revisar el aspecto comercial que presenta el potencial de esta vía navegable para evaluar la demanda de carga de ambos países y su optimización."
    ]
    return(
        <>
        <div>
            {
                list.map(item=>{
                    return <div className="tramo-list-line" >{item}</div>
                }) 
            }
        </div>
        </>
    )
}

export default Tramolist