import React from "react";
import Footer from "../Footer/Footer";
import './NormativasBilaterales.css'
const NormativasBilaterales = () =>{
    
    
    const conveniosList = [
        {
            title:"Convenio sobre Conservación y Desarrollo de los Recursos Ícticos (1996)",
            link:"https://comip.org.ar/wp-content/uploads/2017/08/Convenio-Argentina-Paraguay-Recursos-Icticos.pdf",
            description:"La República Argentina y la República del Paraguay articulan las bases de cómo las partes se entenderán en los temas referidos a la conservación y desarrollo de los recursos ícticos de los ríos Paraná y Paraguay."
        },
        {
            title:"Protocolo adicional (1997)",
            link:"https://comip.org.ar/wp-content/uploads/2017/06/pesca-protocolo.pdf",
            description:"Se adenda al Convenio sobre Conservación y Desarrollo de los Recursos Ícticos compartidos de los ríos Paraná y Paraguay entre la República Argentina y la República del Paraguay. Instruye cómo se formará el Comité Coordinador cuyas misiones y funciones están mencionadas en el Convenio en el Artículo XI."
        },
        {
            title:"Reglamento Unificado de pesca (2019)",
            link:"https://comip.org.ar/wp-content/uploads/2022/05/Reglamento-Unificado-de-Pesca-2019-1.pdf",
            description:"Establece regulaciones a tener en cuenta en los tramos limítrofes, como ser: artes de pesca permitidas y prohibidas, talla legal mínima de diferentes especies, posibilidad de zonificar y vedar áreas o momentos, entre otras disposiciones."
        },
        
    ]

    return(
        <>
        <div className='comip-info-container' >
            <div className="normativas-title" >Normativas Bilaterales</div>
            <div className="separator-auth-line" ></div>
            <div className='normativas-container' >

            {
                conveniosList.map((convenio,index)=>{
                    return (
                        <div className="normcard-container" >
                            <div className="normcard-content" >
                                <div  className="norm-card-title" >
                                    {convenio.title}
                                </div>
                                <div  className="norm-card-description" >
                                    {convenio.description}
                                </div>
                                <div className="norm-btn-container" >
                                    <a className="norm-pdf-download" href={convenio.link} target='_blank' rel="noreferrer nofollow" >
                                    Ver / Descargar PDF
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
            </div>
            <div className="fauna-footline">
            <p>Antecedentes del Reglamento Unificado (2019) : <a className="fauna-footline-link" href="https://comip.org.ar/wp-content/uploads/2022/05/pesca-reglamento.pdf" target='_blank' rel="noreferrer nofollow" >Reglamento único de pesca (2000)</a> y su <a className="fauna-footline-link" href="https://comip.org.ar/wp-content/uploads/2022/05/ACTA-20-Y-21-07-2006-ITUZAINGO-PROV-CORRIENTES.pdf" target='_blank' rel="noreferrer nofollow" >posterior modificación de 2006.&nbsp;</a></p>
            </div>
            <Footer/>
        </div>
        </>
    )
}
export default NormativasBilaterales