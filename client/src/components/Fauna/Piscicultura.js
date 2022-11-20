import React from "react";
import WaterQuality from "./WaterQuality";

const Piscicultura = () => {
    return(
        <>
            <div className="subsection-title" >Evaluación de la Piscicultura en la Provincia de Corrientes. Franja costera del río Paraná, en su tramo compartido entre Argentina y Paraguay.</div>
            <p><strong>Convenio COMIP-UNNE</strong></p>
            <p>› Se evaluó la actividad piscícola en la provincia de Corrientes, en la zona costera del río Paraná en el tramo compartido entre Argentina y Paraguay.</p>
            <p>› Durante el período febrero – agosto de 2019.</p>
            <p>› Se realizaron visitas a los principales centros urbanos y/o relacionados con la pesca recreativa existentes en el tramo: Ituzaingó, Itá Ibaté, Yahapé, Puerto Abra, Itatí y Paso de la Patria.</p>
            <p>› Mediante la realización de encuestas a diferentes actores locales se obtuvieron datos de la actividad y otros relacionados a la demanda de carne de pescado.</p>
            <p>› Se determinaron las especies que se cultivan y aquellas que podrían cultivarse ante un potencial crecimiento de la actividad local.</p>
            <p>› Se evaluó la calidad del agua de los arroyos afluentes del Tramo para determinar sus condiciones de base.</p>
            <p>› Se cuantificaron las subcuencas que descargan en el Tramo que podrían aportar nutrientes alterando la calidad del agua ante un eventual crecimiento de la actividad.</p>
            <p><strong>Resultados</strong></p>
            <p><strong>Cartografìa</strong></p>
            <p>› Se delimitaron las subcuencas de aporte al río Paraná.</p>
            <p>› Éstas componen en su conjunto una delgada franja costera de unos pocos kilómetros.</p>
            <p>› Las aguas escurren mayormente hacia el macrosistema Iberá o hacia la cuenca del Riachuelo</p>
            <p>› Se identificaron zonas de cultivo de arroz, bosques y pastizales y zonas inundables.</p>
            <p>› La producción de arroz es una actividad productiva muy importante en esta zona denominada Paraná Norte.</p>
            <p>› Se dispone de 30.000 ha para cultivo de cultivo de arroz.</p>
            <p>› Desde el año 2009, se implementan las Buenas Practicas para el Cultivo del Arroz (INTA – Asociación Correntina Plantadores de Arroz).</p>
            <img className="pisci-img" src="/images/Fauna/3_Estudios/2_Piscicultura/gráfico 1.jpg" alt="grafico"/>
            <br/>
            <p><strong>Calidad del Agua en afluentes</strong></p>
            <p>› Se tomaron muestras en los cuatro arroyos (Arg) de mayor caudal afluentes del río Paraná.</p>
            <p>› Se constata la ausencia de aportes alóctonos que pudieran generar la eutrofización u otro tipo de alteración de la calidad del agua.</p>
            <WaterQuality/>
            <br/>
            <p><strong>Piscicultura e Infraestructura</strong></p>
            <p>› Se evidenció un escaso conocimiento sobre esta actividad productiva.</p>
            <p><strong>Se analizó la demanda comercial de carne de pescado:</strong></p>
            <p>› Existe una fuerte demanda de pescado de río en la región.</p>
            <p>› Importante en el sector gastronómico y los que brindan servicios de pesca recreativa.</p>
            <p>› Se obtiene de las prácticas de pesca o en comercios de la región.</p>
            <p>› Puede estimarse que el sector gastronómico no relacionado con la pesca (hoteles, restaurantes, clubes) consumiría alrededor de 100 tn de pescado al año.</p>
            <p>› Mientras que las empresas que ofrecen servicio completo al turismo de pesca recreativa demandarían alrededor de 300 toneladas al año.</p>
            <p><strong>Se analizó la infraestructura disponible:</strong></p>
            <p>› La mayoría de los establecimientos productores de arroz poseen sistemas de bombeo que les permitirían disponer del agua necesaria para los cultivos de peces.</p>
            <p>› Poseen maquinaria adecuada y personal capacitado para el movimiento de suelos que facilitaría la construcción de estanques. La mayoría presenta caminos consolidados que permitiría el acceso de camiones y maquinaria para la cosecha y el transporte de peces.</p>
            <p>› Esta región tiene potencial para el desarrollo del sistema de Rotación Arroz-Peces.</p>
            <p><strong>Especies de interés para el cultivo:</strong></p>
            <p>› Corresponde a las especies blanco de la pesca recreativa y comercial: surubí, pacú, boga y dorado. También especies utilizadas como carnada viva.</p>
            <p>› Solo el cultivo de pacú cuenta con tecnologías debidamente validadas en el NEA.</p>
            <p>› Sus costos de producción permiten alcanzar la producción de carne con márgenes aceptables de ganancia. El cultivo de surubí y dorado aún posee costos muy elevados.</p>

        </>
    )
}

export default Piscicultura