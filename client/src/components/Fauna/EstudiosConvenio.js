import React from "react";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop";

const EstudiosConvenio = () =>{
    
    
    const conveniosList = [
        {
            "title":"Año 2007 -Memo Informe sobre la visita del Proyecto Productivo de Acuicultura de Isla Pe. – Formosa",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-2007-Cuerpo-XXV-Memo-Informe-sobre-la-visita-del-Proyecto-roductivo-de-Acuicultura-de-Isla-Pe.-Formosa.pdf"
        },
        {
            "title":"Año 2007 -Convenio sobre conservacion y desarrollo de los Recursos Icticos en los Tramos Limitrofes de los Rios Parana-Paraguay",
            "link":"https://comip.org.ar/wp-content/uploads/2018/02/Año-2007-Cuerpo-XXVI-Convenio-sobre-conservacion-y-desarrollo-de-los-Recursos-Icticos-en-los-Tramos-Limitrofes-de-los-Rios-Parana-Paraguay.pdf"
        },
        {
            "title":"Año 2007 -Estadisticas de Exportaciones Pesqueras Cuenca del Plata – Arg. 1994-2006",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-2007-Cuerpo-XXV-Estadisticas-de-Exportaciones-Pesqueras-Cuenca-del-Plata-Arg.-1994-2006.pdf"
        },
        {
            "title":"Año 2007 -Acuerdos – Acciones de Comite",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-2007-Cuerpo-XXV-Acuerdos-Acciones-de-Comite.pdf"
        },
        {
            "title":"Año 2007-Accion Unificacion",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-2007-Cuerpo-XXV-Accion-Unificacion-y-unificacion.pdf"
        },
        {
            "title":"Año 2006–Biologia Pesquera de las principales especies de importancia economica en el area de la confluencia de los rios",
            "link":"https://comip.org.ar/wp-content/uploads/2018/02/Año-2006-Cuerpo-XXI-Biologia-Pesquera-de-las-principales-especies-de-importancia-economica-en-el-area-de-la-confluencia-de-los-rios.pdf"
        },
        {
            "title":"Año 2005- Cuerpo XVIII-Espacio encuentro Argentino-Paraguayo",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-2005-Cuerpo-XVIII-Espacio-encuentro-Argentino-Paraguayo.pdf"
        },
        {
            "title":"Año 2005-Informe de Control de Pesca 2003-2005",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-2005-Cuerpo-XIX-Informe-de-Control-de-Pesca-2003-2005.pdf"
        },
        {
            "title":"Año 2003 -INFORMACIONES RELATIVAS A LAS MEDIDAS DE LAS MALLAS DE LAS REDES DE ESPERA",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-2003-Cuerpo-XIII-INFORMACIONES-RELATIVAS-A-LAS-MEDIDAS-DE-LAS-MALLAS-DE-LAS-RAEDES-DE-ESPERA.pdf"
        },
        {
            "title":"Año 2002 -Resultados de las actividades de prevencion y de investigacion de hechos punibles contra el medio ambiente",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-2002-Cuerpo-XVI-Resultados-de-las-actividades-de-prevencion-y-de-investigacion-de-hechos-punibles-contra-el-medio-ambiente.pdf"
        },
        {
            "title":"Año 2002- -Perfil de Proyecto Version 3",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-2002-Cuerpo-XI-Perfil-de-Proyecto-Version-3.pdf"
        },
        {
            "title":"Año 2002 -Lineamientos Grales. para una propuesta de ordenamiento de la pesca de los Rios Parana y Paraguay Segunda Version",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-2002-Cuerpo-XI-Lineamientos-Grales.-para-una-propuesta-de-ordenamiento-de-la-pesca-de-los-Rios-Parana-y-Paraguay.pdf"
        },
        {
            "title":"Año 2000 -Proyecto Regional de la evaluacion de las pesquerias de las cuencas Parana-Paraguay",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-2000-Cuerpo-VIII-Proyecto-Regional-de-la-evaluacion-de-las-pesquerias-de-las-cuencas-Parana-Paraguay.pdf"
        },
        {
            "title":"Año 2000 -Perfil Proyecto Regional de la evaluacion de las pesquerias de las cuencas Parana-Paraguay",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-2000-Cuerpo-VIII-Perfil-Proyecto-Regional-de-la-evaluacion-de-las-pesquerias-de-las-cuencas-Parana-Paraguay.pdf"
        },
        {
            "title":"Año 2000 – Anexo III-Derrame de petroleo en el Rio Iguazu- Anexo III",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-2000-Cuerpo-IX-Anexo-III-Derrame-de-petroleo-en-el-Rio-Iguazu-Anexo-III.pdf"
        },
        {
            "title":"Año 1999- Cuerpo VII- Red de monitoreo Biologico Pesquero en la Cuenca del Plata",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-1999-Cuerpo-VII-Red-de-monitoreo-Biologico-Pesquero-en-la-Cuenca-del-Plata.pdf"
        },
        {
            "title":"Año 1993-Proyecto Regional de la Evaluacion de las Pesquerias de las Cuencas Parana – Paraguay",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-1993-Cuerpo-III-Proyecto-Regional-de-la-Evaluacion-de-las-Pesquerias-de-las-Cuencas-Parana-Paraguay-1.pdf"
        },
        {
            "title":"Año 1990-Informe de la visita a Yacyreta",
            "link":"https://comip.org.ar/wp-content/uploads/2022/09/Ano-1990-Cuerpo-I-Informe-de-la-visita-a-Yacyreta.pdf"
        },
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
        <div id='section-container' >
            <div className='comip-info-container' >
                    <div className="authorities-title" >Estudios del convenio</div>
                    <div className="separator-auth-line" ></div>
                    <div className='content-container' >

                    {
                                conveniosList.map((convenio,index)=>{
                                    return (
                                        <div className="convenio-container" >
                                            <div onClick={()=>toggleShow(index)} className={showQuestions[index]?"fauna-title-active":"convenio-title"} >
                                                {convenio.title}
                                            </div>
                                            <div className="conv-btn-container" >
                                                <a className={showQuestions[index]?  "fauna-download-btn":"fauna-description"}href={convenio.link} target='_blank' rel="noreferrer nofollow" >
                                                DESCARGAR PDF
                                                </a>
                                            </div>
                                            
                                        </div>
                                    )
                                })
                            }
                </div>
                <Footer/>
            </div>
            <ScrollToTop div='section-container' />
        </div>
        </>
    )
}
export default EstudiosConvenio