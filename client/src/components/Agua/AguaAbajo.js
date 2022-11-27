import React from "react";
import ResultsList from "./ResultsList";

const AguaAbajo = () =>{
    const data = {
        results:[
            '/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Resultados/Resultados-01-1-scaled.jpg',
            '/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Resultados/Resultados-02-1-scaled.jpg',
            '/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Resultados/Resultados-03-scaled.jpg',
            '/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Resultados/Resultados-04-scaled.jpg',
            '/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Resultados/Resultados-05-scaled.jpg',
            '/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Resultados/Resultados-06-scaled.jpg',
            '/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Resultados/Resultados-07-scaled.jpg',
        ],
        mayo:[
            '/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Campaña Mayo/CAMPAÑA – 1-1 MAYO 2020-01_PASO-DE-LA-PATRIA.jpg',
            '/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Campaña Mayo/CAMPAÑA – 1-2 MAYO 2020-02_ITATI-2.jpg',
            '/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Campaña Mayo/CAMPAÑA – 1-3  MAYO 2020-03_FITOPLANCTON-Y-ZOOPLANCTON.jpg'
        ],
        agosto:[
            '/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Campaña Agosto/CAMPAÑA - 2-1 AGOSTO 2020-02_PASO-DE-LA-PATRIA-2-scaled.jpg',
            '/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Campaña Agosto/CAMPAÑA - 2-2 AGOSTO 2020-02_ITATI-3-scaled.jpg',
            '/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Campaña Agosto/CAMPAÑA - 2-3 AGOSTO 2020-02_FITOPLANCTON-Y-ZOOPLANCTON-2.jpg'
        ]
    }
    return(
        <>
            <div className="authorities-title" >Subtramo aguas abajo</div>
                <div className="separator-auth-line" ></div>
                <br/>
                <div className='content-container' >
                    <p><strong>“Monitoreo calidad de agua-subproyecto del Tramo Yacyretá-Confluencia Río Paraguay”</strong></p>
                    <p><strong>Período 2019 – 2020</strong></p>
                    <p>› Se exponen los resultados obtenidos durante el período enero 2019 febrero 2020.</p>
                    <p>› De mediciones realizadas en tres localidades ubicadas en margen izquierda del Subtramo Aguas Abajo de Yacyretá: Yahapé, Itatí y Paso de la Patria.</p>
                    <p>› De diferentes parámetros: físico-químicos, metales, fitoplancton/zooplancton, otros.</p>
                    <p>› Existen algunos establecimientos arroceros sobre las cuencas de aportes al río Paraná en el tramo en estudio. No se identificaron industrias.</p>
                    <p>› Teniendo en cuenta los muestreos realizados, se encontraron pocas diferencias de los parámetros analizados entre estaciones y entre sitios de muestreo.</p>
                    <br/>
                    <p><strong>Estaciones de muestreo</strong></p>
                    <br/>
                    <img className="width-100" src="/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Estaciones de muestreo.jpg"  alt="estaciones de muestreo"/>
                    <br/>
                    <br/>
                    <br/>
                    <p><strong>Variaciones del nivel hidrométrico – Período: 2019 – 2020</strong></p>
                    <p>› Se presentan los registros de las alturas hidrométricas en puertos de referencia: Itatí, Itá Ibaté, Ituzaingó, Posadas y Puerto Libertador General San Martín.</p>
                    <p>› Se caracterizó por la ocurrencia de niveles bajos, particularmente entre julio y diciembre de 2019.</p>
                    <p>› La bajante extraordinaria registrada en octubre de 2019 determinó el aislamiento del valle de inundación respecto del cauce principal.</p>
                    <img className="width-100" src="/images/El agua/4_Calidad del agua/1_Subtramo Aguas Abajo/Variaciones del nivel hidrométrico.jpg" alt="niveles hidrometricos" />
                    <br/>
                    <br/>
                    <br/>
                    <p><strong>Resultados</strong></p>
                    <p>Se presentan los resultados obtenidos a partir del análisis de la calidad del agua realizados durante el periodo enero de 2019 - febrero 2020.</p>
                <ResultsList list={data.results}/>
                <p><strong>Campaña – Mayo 2020</strong></p>
                <p>› Se exponen los resultados obtenidos en la campaña del mes de mayo del 2020, en condiciones de bajante extraordinaria.</p>
                <p>› Con el objetivo de contar con datos actualizados del estado general del río.</p>
                <p>› Se recolectaron muestras en dos localidades de la margen izquierda : Itatí y Paso de la Patria.</p>
                <p>› Se analizaron parámetros físico – químicos, metales, fitoplancton – zooplancton, otros.</p>
                <p>› En general, los resultados indicaron que todos los parámetros se encuentran dentro de los valores esperados para el tramo.</p>
                <p>› Acceda a los resultados de laboratorio. <a href="https://comip.org.ar/wp-content/uploads/2021/04/mayo.pdf" target="_blank" rel="noreferrer noopener">CLICK AQUI.</a> </p>
                <p>› A continuación, los resultados de los parámetros medidos in situ.</p>
                <br/>
                <ResultsList list={data.mayo}/>
                <br/>
                <br/>
                <p><strong>Campaña - Agosto 2020</strong></p>
                <p>› Se exponen los resultados obtenidos en la campaña del mes de agosto del 2020, en condiciones de bajante extraordinaria.</p>
                <p>› Se recolectaron muestras en dos localidades de la margen izquierda : Itatí y Paso de la Patria.</p>
                <p>› En general, los resultados indicaron que todos los parámetros se encuentran dentro de los valores esperados para el tramo.</p>
                <p>› Acceda a los resultados de laboratorio. <a rel="noreferrer noopener" href="https://comip.org.ar/wp-content/uploads/2021/04/agosto-1.pdf" target="_blank">CLICK AQUI.</a></p>
                <p>› A continuación, los resultados de los parámetros medidos in situ.</p>
                <br/>
                <ResultsList list={data.agosto} />
                <br/>
            </div>

        </>
    )
}

export default AguaAbajo 