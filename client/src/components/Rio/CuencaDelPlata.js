import React from "react";
import './CuencaDelPlata.css'
import worldPic from '../../assets/images/rio/1_Cuenca del Plata/Mapa.jpg'
const CuencaDelPlata =()=>{
    const text=[
        "La Cuenca del Plata por su extensión geográfica y por el caudal de sus ríos es una de las más importantes del mundo. Y por tratarse de un territorio compartido por cinco países:<strong> Argentina, Paraguay, Brasil, Bolivia y Uruguay</strong>. Cubre un área de unos 3.170.000 km², lo que la convierte en la segunda mayor de Sudamérica y la quinta del mundo, por detrás de las del Amazonas, Congo, Nilo y Mississippi.",
        "A través de su ancha desembocadura en el océano Atlántico, la Cuenca del Plata entrega al mar un caudal de 25.000 m³/s. Las aguas de dos grandes ríos confluyen en el Río de la Plata, el Paraná y el Uruguay que, a su vez, recogen el caudal de otros ríos muy importantes, como el Paraguay, el Bermejo, el Pilcomayo y el Iguazú, entre muchos otros.",
        "Los límites del territorio no coinciden con las fronteras de los países, por lo que los Estados (en tanto jurisdicciones administrativas) establecieron acuerdos para su manejo. El fuerte proceso de integración regional, iniciado en 1969 con el Tratado de la Cuenca del Plata y, más tarde, con el Mercosur, constituyen un modelo en los lazos establecidos en el respeto a la diversidad."
    ]
    return(
        < >
            {
                text.map(p=>{
                    return <>
                        <p dangerouslySetInnerHTML={{__html:p}}/>
                        <br></br>
                    </>
                })
            }

        <img className="cuencadelplata-img" src={worldPic} alt="Mapa Cuenca del Plata" loading="lazy" />
        </>
    )
}

export default CuencaDelPlata