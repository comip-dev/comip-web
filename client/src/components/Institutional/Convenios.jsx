import React from "react";
import Footer from "../Footer/Footer";
import './Convenios.css'
import HeadingPic from '../../assets/images/inst/Encabezado Convenios.jpg'
const Convenios =() =>{
    const conveniosList=[
        {
            title:"CONVENIO COMIP - SSPVNyMM - 27/10/2021",
            description:"Analizar y estudiar el potencial y los usos de la vía navegable, su estado actual y la actividad portuaria desarrollada en la margen izquierda del Tramo Compartido.",
            link:"https://comip.org.ar/wp-content/uploads/2021/11/CONVENIO-SSPVNyMM-COMIP-2021.pdf"
        },
        {
            title:"CONVENIO UNNE - COMIP - 29/04/2021",
            description:"Para el desarrollo de iniciativas conjuntas vinculadas al ambiente, la fauna, la navegación y los proyectos de aprovechamiento multipropósito en el tramo de competencia de la COMIP.",
            link:"https://comip.org.ar/wp-content/uploads/2021/11/CONVENIO-UNNE-COMIP-2021.pdf"
        },
        {
            title:"CONVENIO INA - COMIP - 27/04/2021",
            description:"A fin de favorecer la concertación de programas de cooperación para la ejecución coordinada de proyectos de investigación, docencia y/o extensión de áreas de mutuo interés.",
            link:"https://comip.org.ar/wp-content/uploads/2021/11/CONVENIO-INA-COMIP-2021.pdf"
        },
        {
            title:"CONVENIO DE COMIP CON RECURSOS HÍDRICOS - 30/12/2018",
            description:"Para el intercambio de información entre ambos organismos y la articulación de acciones conjuntas sobre las mediciones hidrométricas en el Tramo y programas de estudio sobre Calidad de Agua.",
            link:"https://comip.org.ar/wp-content/uploads/2019/02/ACTA-DE-REUNION-RECURSOS-HIDRICOS.pdf"
        },
        {
            title:"CONVENIO CON PREFECTURA NAVAL ARGENTINA - 24/07/2018",
            description:"A fin de establecer vínculos para la asistencia y cooperación dado que en el ámbito de sus competencias existen actividades comunes.",
            link:"https://comip.org.ar/wp-content/uploads/2019/02/CONVENIO-PNA-2018.pdf"
        },
        {
            title:"CONVENIO MARCO ENTRE COMIP Y CONAE 20/03/2018",
            description:"A fin de cooperar institucionalmente en el marco del Plan Espacial Nacional, proporcionar su capacidad técnica y tecnológica para el cumplimiento de los objetivos de ambos Organismos.",
            link:"https://comip.org.ar/wp-content/uploads/2019/02/Convenio-Marco-COMIP-CONAE.pdf"
        },
        {
            title:"CONVENIO CON EL INSTITUTO GEOGRÁFICO NACIONAL 30/05/2017",
            description:"Para el desarrollo de acciones específicas en materia de cartografía o actualizaciones aerofotogramétricas.",
            link:"https://comip.org.ar/wp-content/uploads/2017/06/CONVENIO-FINAL.pdf"
        },
        {
            title:"CONVENIO CON LA UNIVERSIDAD NACIONAL DE MISIONES 05/04/2017",
            description:"Para potenciar la sustentabilidad en las acciones de COMIP.",
            link:"https://comip.org.ar/wp-content/uploads/2017/05/CONVENIO-FIRMADO-UNaM.pdf"
        },
        {
            title:"ACUERDO DE COOPERACIÓN ITAIPÚ - COMIP 30/03/2017",
            description:"Tiene por objeto establecer vínculos de cooperación entre las partes para la ejecución de iniciativas vinculadas al aprovechamiento de los recursos del río Paraná, relacionados con la calidad de agua, ictiología, navegación y otros propósitos de interés mutuo.",
            link:"https://comip.org.ar/wp-content/uploads/2017/11/Acuerdo-de-Cooperacion-JEA-004-2017-Itaipu-COMIP-1.pdf"
        },
        {
            title:"CONVENIO DE COOPERACION ENTRE UNNE Y COMIP 16/02/2017",
            description:"Para el desarrollo de iniciativas vinculadas al ambiente, la navegación y el desarrollo regional en el ámbito de la competencia geográfica de la Comisión.",
            link:"https://comip.org.ar/wp-content/uploads/2017/05/CONVENIO-FIRMADO-UNNE.pdf"
        },
        {
            title:"MEMORANDO DE ENTENDIMIENTO CON CORRIENTES 01/02/2017",
            description:"Para desarrollar acciones y estudios conjuntos sobre el Río Paraná (en el tramo de competencia de la COMIP) para su aprovechamiento en distintos usos, asi como la promoción del desarrollo y la preservación del ambiente.",
            link:"https://comip.org.ar/wp-content/uploads/2017/05/Memo-Corrientes-Comip.pdf"
        },
        {
            title:"CONVENIO DE COOPERACIÓN UNI - COMIP 30/05/2014",
            description:"Tiene por objeto establecer un marco legal para la cooperación mutua en el desarrollo de actividades académicas, científicas y de transferencia de tecnología de común interés.",
            link:"https://comip.org.ar/wp-content/uploads/2020/11/Convenio-de-Cooperación-UNI-COMIP-2.pdf"
        },
        {
            title:"CONVENIO MARCO ENTRE YACIRETÁ Y COMIP 02/03/2001",
            description:"Su objetivo es la participación conjunta de ambos organismos para el intercambio de información, formación de recursos humanos y la implementación de iniciativas, con especial énfasis en el ambiente, estudios hidrológicos y manejo de la cuenca.",
            link:"https://comip.org.ar/wp-content/uploads/2017/11/002CONV-EBY-COMIP-2001-RENOVAC-AUTOMAT.pdf"
        },
    ]
    const falseState=conveniosList.map(item=>false)
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
            <div className="institutional-pic" >
                <img className="heading-pic" src={HeadingPic} alt="encabezado"/>
            </div>
            <div  className="authorities-container" >
                <div className="authorities-title" >Convenios de Cooperación</div>
                <div className="separator-auth-line" ></div>
                <br/>
                <div className="convenios-container" >
                    {
                        conveniosList.map((convenio,index)=>{
                            return (
                                <div className="convenio-container" >
                                    <div onClick={()=>toggleShow(index)} className={showQuestions[index]?"convenio-title-active":"convenio-title"} >
                                        {convenio.title}
                                    </div>
                                    <div  className={showQuestions[index]?"convenio-description-show":"convenio-description"} dangerouslySetInnerHTML={{__html: convenio.description}} >
                                        
                                    </div>
                                    <div className="conv-btn-container" >
                                        <a className={showQuestions[index]?  "convenio-download-btn":"convenio-description"}href={convenio.link} target='_blank' rel="noreferrer nofollow" >
                                        Descargar convenio
                                        </a>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            <Footer/>
            </div>
        </>
    )
}

export default Convenios