import React from "react";
import ResultsList from "./ResultsList";

const AguaArriba = () =>{
    const data={
        estaciones: [
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Estaciones/ESTACIONES_06_UNAM____Mesa-de-trabajo-1-copia-10-scaled.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Estaciones/ESTACIONES_02_UNAM____Mesa-de-trabajo-1-copia-11-scaled.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Estaciones/ESTACIONES_07_UNAM____Mesa-de-trabajo-1-copia-12-scaled.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Estaciones/ESTACIONES_03_UNAM____Mesa-de-trabajo-1-copia-13-scaled.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Estaciones/ESTACIONES_01_UNAM____Mesa-de-trabajo-1-copia-14-scaled.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Estaciones/ESTACIONES_04_UNAM____Mesa-de-trabajo-1-copia-15-scaled.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Estaciones/ESTACIONES_05_UNAM____Mesa-de-trabajo-1-copia-16-scaled.jpg',
        ],
        resultados:[
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Informe semestral 2019/Informe Semestral 2019 _01_OXIGENO-DISUELTO-01.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Informe semestral 2019/Informe Semestral 2019 _02.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Informe semestral 2019/Informe Semestral 2019 _03_TEMPERATURA-DEL-AGUA-1.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Informe semestral 2019/Informe Semestral 2019 _04_SOLIDOS-1.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Informe semestral 2019/Informe Semestral 2019 _05_FOSFORO-Y-NITROGENO-1.jpg',
        ],
        comparativo:[
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Análisis comparativo 2015-2019/Análisis comparativo_01.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Análisis comparativo 2015-2019/Análisis comparativo_02.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Análisis comparativo 2015-2019/Análisis comparativo_03.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Análisis comparativo 2015-2019/Análisis comparativo_04.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Análisis comparativo 2015-2019/Análisis comparativo_05.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Análisis comparativo 2015-2019/Análisis comparativo_06.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Análisis comparativo 2015-2019/Análisis comparativo_07.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Análisis comparativo 2015-2019/Análisis comparativo_08.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Análisis comparativo 2015-2019/Análisis comparativo_09.jpg',
        ],
        octubre:[
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Campaña – octubre 2020/ORTOFOSFATO-Y-NITROGENO-scaled.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Campaña – octubre 2020/OXIGENO-DISUELTO-2-scaled.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Campaña – octubre 2020/PH-2-scaled.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Campaña – octubre 2020/SOLIDOS-scaled.jpg',
            '/images/El agua/4_Calidad del agua/2_1_Subtramo Aguas Arriba/Campaña – octubre 2020/TEMPERATURA-DEL-AGUA-2-scaled.jpg',
        ]
    }
    return(
        <>
            <div className="authorities-title" >Subtramo aguas arriba</div>
                <div className="separator-auth-line" ></div>
                <br/>
                <div className='content-container' >
                <p><strong>"Monitoreo de calidad de agua, Río Paraná: Tramo compartido entre la República Argentina y Respública del Paraguay"</strong></p>
                <p><strong>Estaciones</strong></p>
                <br/>
                <ResultsList list={data.estaciones}/>
                <p><strong>Resultados</strong><br/>Informe Semestral 2019</p>
                <p>En su mayoría, los valores de demanda bioquímica de oxígeno se encontraron por debajo del límite de detección de la técnica utilizada (2mg/L).</p>
                <p>No se detectaron sulfuros (límite de detección 0.1mg/L) ni sustancias fenólicas (límite de detección 0.001 mg/L).</p>
                <p>Los valores de grasas y aceites (SSEE) se encontraron por debajo del límite de detección de la técnica utilizada (20 mg/L).</p>
                <p>Acceda al informe: <a className="subtramo-link" href="https://comip.org.ar/wp-content/uploads/2020/11/483743069-Inf-de-Evaluacion-Semestral-COMIP-2019-comprimido.pdf" target="_blank" rel="noopener noreferrer">CLICK AQUÍ</a></p>
                <br/>
                <ResultsList list={data.resultados} addEmpty={true} />
                <p><strong>Análisis comparativo – Período 2015 – 2019</strong></p>
                <p>› Se presenta un análisis comparativo de los resultados obtenidos en las campañas realizadas entre el año 2015 y 2019.</p>
                <br/>
                <ResultsList list={data.comparativo} />
                <br/>
                <p><strong>Campaña - junio 2020</strong></p>
                <p>› Se exponen los resultados obtenidos en la campaña del mes de junio de 2020 – en condiciones de bajante extraordinaria.</p>
                <p>› Con el objetivo de contar con datos actualizados del estado general del río.</p>
                <p>Acceda a los resultados de laboratorio. <a className="subtramo-link" rel="noreferrer noopener" href="https://comip.org.ar/wp-content/uploads/2021/04/unamjunip.pdf" target="_blank">CLICK AQUI. </a></p>
                <br/>
                <p><strong>Campaña – octubre 2020</strong></p>
                <p>› Se exponen los resultados obtenidos en la campaña octubre – 2020, en condiciones de bajante extraordinaria.</p>
                <p>› Con el objetivo de contar con datos actualizados del estado general del río.</p>
                <ResultsList list={data.octubre} addEmpty={true}/>
                <br/>
                <p><strong>Campaña – febrero 2021</strong></p>
                <p>› Se exponen los resultados obtenidos en la campaña del mes de febrero 2021.</p>
                <p>Acceda a los resultados del laboratorio: <a className="subtramo-link" rel="noreferrer noopener" href="https://comip.org.ar/wp-content/uploads/2021/04/parametrosfisicosquimicos2-2-UNAM.pdf" target="_blank">CLICK AQUI. </a></p>
                <p>Acceda a los resultados de los parámetros cuyos valores dieron iguales o menores al límite de detección y cuántificación de la técnica utilizada. <a className="subtramo-link" rel="noreferrer noopener" href="https://comip.org.ar/wp-content/uploads/2021/04/parametrosfisicosquimicos2-1-UNAM.pdf" target="_blank">CLICK AQUI. </a> </p>
                <br/>
                <p><strong>Informes</strong></p>
                
                <p>› Informe final 2017 – 2018. <a className="subtramo-link" rel="noreferrer noopener" href="https://www.docdroid.net/59iBNxS/inf-anual-calidad-de-agua-2017-2018-comprimido-pdf" target="_blank">CLICK AQUI. </a></p>
                <p>› Informe semestral 2019. <a className="subtramo-link" rel="noreferrer noopener" href="https://comip.org.ar/wp-content/uploads/2021/04/ilovepdf_merged.pdf" target="_blank">CLICK AQUI.</a> </p>
                <p>› Informe final período 2018 – 2019. CLICK AQUI. </p>
                <p>› Informe campaña – junio 2020. <a className="subtramo-link" rel="noreferrer noopener" href="https://www.docdroid.net/xLLxF0Q/calidad-de-agua-junio-2020-pdf" target="_blank">CLICK AQUI.</a> </p>
                <p>› Informe campaña – octubre 2020. <a className="subtramo-link" rel="noreferrer noopener" href="https://www.docdroid.net/QQJehbA/calidad-de-agua-octubre-2020-1-pdf" target="_blank">CLICK AQUI. </a></p>
                <p>› Informe campaña – febrero 2021. <a className="subtramo-link" href="https://www.docdroid.net/w8FQWpH/calidad-de-agua-febrero-2021-pdf" target="_blank" rel="noreferrer noopener">CLICK AQUI.</a> </p>
                
                
            </div>
        </>
    )
}

export default AguaArriba