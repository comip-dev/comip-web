import React from "react";
import './RioParana.css'
import trifinio from '../../assets/images/rio/2_Río Paraná/2_Trifinio_Mesa de trabajo 1.jpg'
import image4 from '../../assets/images/rio/2_Río Paraná/Posibilidades-de-desarrollo-económico.jpg'
import ParanaStretches from "./ParanaStretches";
import Regimen from "./Regimen";
const RioParana =()=>{
    const text=[
        "El Paraná es el río más influyente del sistema de la Cuenca del Plata, por su caudal, por la extensión de su área tributaria y por la longitud de su curso, entre otras características. El río nace entre los estados brasileños de São Paulo, Minas Gerais y Mato Grosso del Sur, de la confluencia del río Grande y el río Paranaíba. Corre hacia el sudoeste, para delimitar el estado de Mato Grosso del Sur con los de São Paulo y Paraná hasta la ciudad de Salto del Guairá, desde donde demarca la frontera entre Brasil y Paraguay hasta la Triple frontera entre Paraguay, Argentina y Brasil.","Desde su origen en la confluencia con los ríos Paranaíba y Grande (Brasil) hasta su desembocadura en el Río de la Plata, tiene 2.570 km. Sumada la extensión de su afluente principal, el Paranaíba, alcanza los 3.740 km.",
        
    ]
    return(
        < >
            {
                text.map(p=>{
                    return <>
                        <p dangerouslySetInnerHTML={{__html:p}}/>
                    </>
                })
            }
            <div className="section-subtitle" >Trifinio</div>
            <div className="separator-auth-line-section" ></div>
            <br/>
            <br/>
            <img className="trifinio-imagen" src={trifinio} alt="imagen trifinio" loading="lazy" />
            {/* <br/>
            <br/> */}
            <ParanaStretches/>
            <br/>
            <br/>
            <br/>
            <div className="stretches-place" ></div>

            <div className="section-subtitle" >Régimen fluvial y variedad climática</div>
            <div className="separator-auth-line-section" ></div>
            <br/>
            <Regimen/>
            <br/>
            <div className="section-subtitle" >Posibilidades de desarrollo económico</div>
            <br/>
            <div className="stretches-container" >
                    <p >El Paraná y la cuenca del Plata ocupan el área más poblada e industrializada de América del Sur, y el río vincula, a su vez, las dos mayores áreas económicas del subcontinente: por un lado, el Estado de São Paulo, en el norte y, por el otro, el eje fluvial industrial Santa Fe-La Plata en el sur. Esto le otorga al río una gran importancia estratégica tanto a nivel político como económico y lo convierte en la principal vía de integración del Mercosur. A su vez es una de las principales reservas de agua dulce del mundo, al estar vinculada con el Acuífero Guaraní.</p>
                    <img src={image4} alt="" loading="lazy" />
                </div>
        </>
    )
}

export default RioParana