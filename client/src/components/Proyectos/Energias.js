import React from "react";
import './Energias.css'
const Energias = ()=>{
    const conveniosList=[
    {
        title:'¿Qué tipos de energía existen?',
        text1:'<p>La energía es un <strong>recurso necesario e indispensable para la vida;</strong> mediante su uso se alimenta, se traslada, se refugia del clima y cumple con sus obligaciones diarias la mayor parte de la humanidad. Pero, ¿se agota la energía cuando la consumimos? Eso depende de cual sea <strong>su origen</strong></p><p><strong>La energía no renovable </strong>es aquella que no puede ser producida, cultivada, regenerada o reutilizada a una escala que pueda sostener su consumo. Estos recursos existen en cantidades limitadas o son consumidos mucho más rápido de lo que la naturaleza puede volver a reponerlos. De aquí el nombre de energías “no-renovables” o convencionales.</p>',
        video1:'https://www.youtube.com/embed/XbxlleIdHpw',
        text2:'<p><strong>La energ&iacute;a renovable</strong>, en cambio,&nbsp; es aquella que se puede recuperar, por procesos naturales, <strong>m&aacute;s r&aacute;pido de lo que la consumen los seres humanos</strong><strong>.</strong> La radiaci&oacute;n solar, las mareas, el viento y el agua son recursos que no corren peligro de agotarse a largo plazo. Otros recursos como madera, papel, cuero, etc. pueden ser renovables si son producidos en forma sostenible. Por lo tanto, se denomina energ&iacute;a renovable a aquella que se obtiene de fuentes naturales <strong>virtualmente inagotables.</strong></p>',
        video2:'https://www.youtube.com/embed/iEJDEBvLLuM'
    },
    {
        title:'¿Cuáles son las energías renovables más utilizadas?',
        text1:'<p><strong>Energía hidráulica </strong>- Este tipo de energía se obtiene a partir del aprovechamiento del caudal y la altura del salto de agua mediante la construcción de represas. Para producirla, parte del agua almacenada se deja salir de la presa para que mueva una turbina, que a su vez acciona un generador de energía eléctrica. Así, su energía potencial se convierte en energía cinética llegando a las salas de máquinas. El agua pasa por las turbinas a gran velocidad, provocando un movimiento de rotación que finalmente se transforma en energía eléctrica por medio de los generadores.</p><p><strong>Energía solar</strong> - Es la energía emitida por el Sol, que puede ser aprovechada por paneles solares y convertida en calor o en electricidad: es decir en energía térmica o eléctrica. Cada año la radiación solar aporta a la Tierra la energía equivalente a varios miles de veces la cantidad de energía que consume la humanidad; por lo tanto este recurso cuenta con un gran potencial de aprovechamiento a largo plazo. </p><p><strong>Biomasa </strong>- Es aquella energía obtenida por la acción del viento. Se consigue a través de turbinas que convierten la energía cinética del viento en electricidad, por medio de hélices que hacen girar un eje central conectado a través de engranajes a un generador eléctrico. El término “eólico” deriva de Éolo, dios griego de los vientos.</p><p><strong>Energía eólica</strong> - Es aquella energía obtenida por la acción del viento. Se consigue a través de turbinas que convierten la energía cinética del viento en electricidad, por medio de hélices que hacen girar un eje central conectado a través de engranajes a un generador eléctrico. El término “eólico” deriva de Éolo, dios griego de los vientos.</p><p><strong>Energía geotérmica</strong> -  Es la energía obtenida de los depósitos subterráneos de vapor y agua caliente, que puede utilizarse para generar electricidad o para aportar calefacción y refrigeración. Para producir electricidad geotérmica se perforan pozos en depósitos subterráneos, aprovechando el vapor y agua muy caliente para accionar turbinas conectadas a generadores de electricidad.</p><p><strong>Energía marina</strong> - Es la energía producida por las olas del mar, o las mareas. El movimiento del agua en los océanos crea un vasto almacén de energía cinética que puede ser aprovechada por las poblaciones a su alrededor. Esta energía, también denominada oceánica, cuenta con la ventaja de ser constante durante todo el año.</p>',
    },
    {
        title:'¿Cómo funciona un aprovechamiento multipropósito?',
        img:'/images/Proyectos/1_La-energia/aprovechamientoMultiproposito.png',
        text1:'<p>La cadena de generación comienza con el agua ingresando a las turbinas, grandes hélices instaladas en un conducto por el que pasa el agua del embalse. El giro de las turbinas se traslada a los generadores, máquinas giratorias que convierten la energía cinética en energía eléctrica. La electricidad producida por este proceso se puede transportar a grandes distancias a través de las líneas de transmisión; y una vez llegada a destino, esa electricidad puede mutar nuevamente en otras formas de energía (calor, luz, nuevamente movimiento, etc).</p> ',
    },
    // {
    //     title:'¿Qué tipos de aprovechamientos hidroeléctricos existen?',
    //     text1:'<p>De montaña:</p>',
    //     video1:'https://www.argentina.gob.ar/economia/energia/energia-electrica/hidroelectrica/como-se-genera-la-energia-hidroelectrica',
    //     text2:'De llanura:',
    //     video2:'',
    //     text3:'',
    //     video3:'',
    // },
    {
        title:'¿Cuáles son los beneficios de la hidroelectricidad?',
        text1:'<p>› <strong>Permite generar electricidad para iluminación </strong>con energía verde.</p><p>› <strong> Contribuye al almacenamiento de agua potable.</strong> </p><p>› <strong>Garantiza el suministro en apoyo de otras fuentes intermitentes,</strong> aumentando la estabilidad y confiabilidad del sistema eléctrico</p><p>› <strong>Ayuda a combatir el cambio climático </strong>(por su bajo nivel de emisión de gases)</p><p>› <strong>Proporciona energía asequible</strong> para generaciones.</p><p>› <strong>Permite almacenar energía eólica y solar en el agua</strong></p><p>› <strong>Facilita la descarbonización de industrias con energías limpias</strong> </p><p>› <strong>Protege a las comunidades de inundaciones y sequías</strong> </p>',
        video1:'',
        text2:'',
        video2:'',
        text3:'',
        video3:'',
    },
    {
        title:'¿Cuáles son sus ventajas para la navegación?',
        text1:'<p>Los aprovechamientos hidroeléctricos multipropósito pueden ser de gran ayuda para <strong>garantizar la navegabilidad, </strong>en ríos con problemas de bajo caudal. Ya que acumulan agua para la producción de energía en sus embalses, <strong>pueden aportar el caudal necesario para paliar inconvenientes de navegación fluvial. </strong>A pesar de que estas construcciones están emplazadas en el medio de la vía navegable, cuentan con variadas estrategias para permitir el paso de las embarcaciones. Un buen ejemplo resulta la Esclusa de Navegación de Yacyretá, obra de ingeniería que funciona como un <strong>“ascensor de barcos”</strong>para controlar el desnivel producido por la represa; permitiendo así el pasaje de navíos a través de la misma.</p>',
        video1:'https://www.youtube.com/embed/IRQw0EOTgNI'
    }
]
    const falseState=conveniosList.map(item=>false)
    const [showQuestions, setShowQuestions] = React.useState(falseState)
    const toggleShow = (i) =>{
        const currentState=showQuestions[i]
        let items = [...falseState]
        items[i] = !currentState
        setShowQuestions(items)
    }
    return(
        <>
            {
                conveniosList.map((convenio,index)=>{
                    return (
                        <div className="convenio-container gap-box" >
                            <div onClick={()=>toggleShow(index)} className={showQuestions[index]?"convenio-title-active ":"convenio-title"} >
                                {convenio.title}
                            </div>
                            <div className={showQuestions[index]?"convenio-description-show":"convenio-description"}  >
                                <div  dangerouslySetInnerHTML={{__html: convenio.text1}} ></div>
                                {
                                    convenio.video1 &&  <> <div className={showQuestions[index]?"question-video-show":"question-video"} >
                                    <iframe  src={convenio.video1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                    </div>
                                    </>
                                }
                                {
                                    convenio.img && <div className={showQuestions[index]?"question-video-show":"question-video"} >
                                    <img src={convenio.img} alt="relacionada" />
                                    </div>
                                }
                                {
                                    showQuestions[index] && convenio.text2 && <div  className={showQuestions[index]?"convenio-description-show":"convenio-description"} dangerouslySetInnerHTML={{__html: convenio.text2}} ></div>
                                }
                                {
                                    convenio.video2 &&  <> <div className={showQuestions[index]?"question-video-show":"question-video"} >
                                    <iframe  src={convenio.video2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                    </div>
                                    </>
                                }
                                
                            </div>                            
                            {/* <div className="conv-btn-container" >
                                <a className={showQuestions[index]?  "convenio-download-btn":"convenio-description"}href={convenio.link} target='_blank' rel="noreferrer nofollow" >
                                Descargar convenio
                                </a>
                            </div> */}
                            
                        </div>
                    )
                })
            }
        </>
    )
}

export default Energias