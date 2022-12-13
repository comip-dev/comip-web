import React from 'react'
import { Chrono } from "react-chrono";
import './Timeline.css'
const Timeline = () =>{
    const myList = [
        {
            year:'1971',
            // text:'CONVENIO PARA EL ESTUDIO DEL APROVECHAMIENTO DE LOS RECURSOS DEL RÍO PARANA',
            text:'Convenio para el estudio del aprovechamiento de los recursos del Río Paraná',
            link:'https://www.comip.org.ar/wp-content/uploads/2017/05/Convenio-para-el-estudio-del-aprovechamiento-de-los-recursos-del-río-paraná..pdf'
        },
        {
            year:'1979',
            text:'CONVENIO TRIPARTITO',
            link:'https://www.comip.org.ar/wp-content/uploads/2017/05/acuerdo-tripartito-1979.pdf'
        },
        {
            year:'1989',
            // text:'ACUERDO POR CANJE DE NOTAS SOBRE FAUNA ÍCTICA Y CALIDAD DE AGUA',
            text:'Acuerdo por canje de notas sobre Fauna Íctica y Calidad de Agua',
            link:'https://www.comip.org.ar/wp-content/uploads/2017/05/1989-ACUERDO_FAUNA.pdf'
        },
        {
            year:'1992',
            double:true,
            list:[
                {
                    // text:'ACUERDO POR CAMBIO DE NOTAS DESIGNANDO A LA COMIP COMO COMISIÓN ADMINISTRADORA DEL TRAMO CONTIGUO DEL RÍO PARANÁ',
                    text:'Acuerdo por cambio de notas designado a la COMIP como comisión administradora del tramo contiguo del Río Paraná',
                    link:'https://www.comip.org.ar/wp-content/uploads/2017/05/1992-ACUERDO-Comisión-administradora.pdf',
                },
                {
                    text:'Acuerdo por canje de notas sobre autoridad de control de la Zona de Reserva Íctica',
                    // text:'ACUERDO POR CANJE DE NOTAS SOBRE AUTORIDAD DE CONTROL DE LA ZONA DE RESERVA ÍCTICA',
                    link:'https://www.comip.org.ar/wp-content/uploads/2018/08/Nota-Reversal-N°7-1992.pdf',
                },
            ]
        },
        {
            year:'1998',
            text:'Reglamento técnico-administrativo',
            link:'https://www.comip.org.ar/wp-content/uploads/2017/05/Reglamento-técnico-administrativo.pdf'
        },
        {
            year:'2000',
            // text:'MEMORANDUM DE ENTENDIMIENTO ENTRE LOS GOBIERNOS DE LA REPÚBLICA ARGENTINA Y LA REPÚBLICA DEL PARAGUAY SOBRE EL PROYECTO CORPUS CHRISTI',
            text:'Memorándum de entendimiento entre los gobiernos de la República Argentina y la República del Paraguay sobre el proyecto Corpus Christi',
            link:'https://www.comip.org.ar/wp-content/uploads/2018/08/MEMORANDUM-CORPUS.pdf'
        },
        {
            year:'2001',
            double:true,
            list:[
                {
                    // text:'ACUERDO DE SEDE ENTRE LA COMIP Y LA REPÚBLICA ARGENTINA',
                    text:'Acuerod de sede entre la COMIP y la República Argentina',
                    link:'https://www.comip.org.ar/wp-content/uploads/2018/08/Acuerdo-de-sede-COMIP.pdf',
                },
                {
                    // text:'ACUERDO DE SEDE ENTRE LA COMIP Y LA REPÚBLICA DEL PARAGUAY – LEY Nº 1971',
                    text:'Acuerdo de sede entre la COMIP y la República del Paraguay - Ley N° 1971',
                    link:'https://www.comip.org.ar/wp-content/uploads/2017/10/ley-py.pdf',
                },
            ]
        },
        
        {
            year:'2005',
            text:'Estatuto del Tribunal Arbitral',
            link:'https://www.comip.org.ar/wp-content/uploads/2017/05/Estatuto-del-tribunal-arbitral.pdf'
        },
        {
            year:'2006',
            double:true,
            list:[
                {text:'El Congreso Argentino aprueba el acuerdo de sede - Ley N° 26.187',
                // {text:'EL CONGRESO ARGENTINO APRUEBA EL ACUERDO DE SEDE – LEY Nº 26.187',
                link:'https://www.comip.org.ar/wp-content/uploads/2017/10/ley-ba.pdf'},
                {text:'Memorandum de entendimiento entre la República del Paraguay y la República Argentina',
                // {text:'MEMORANDUM DE ENTENDIMIENTO ENTRE LA REPÚBLICA DEL PARAGUAY Y LA REPÚBLICA ARGENTINA',
                link:'https://www.comip.org.ar/wp-content/uploads/2017/05/Memorandum-de-entendimiento-entre-la-república-del-paraguay-y-la-república-argentina.pdf'},
            ]
        },
        
    ]
    return(
        <>
        <Chrono
            className="my-timeline"
            mode="HORIZONTAL"
            cardPositionHorizontal='TOP'
            disableClickOnCircle={false}
            scrollable={false}
            lineWidth='2'
            // cardWidth='1000rem'
            // cardHeight='00'
            enableOutline
            borderLessCards
            theme={{
                primary:"#969696",secondary:"#05488C",
                titleColorActive: 'white',
                }}
            // fontSizes={{
            //         cardSubtitle: '0.85rem',
            //         cardText: '0.8rem',
            //         cardTitle: '1rem',
            //         title: '1.1rem',
            //     }}
                classNames={{
                    card: 'my-card',
                    title: 'my-title',
                    
                }}
            items={myList.map((item,i)=>{
            return{title:item.year,}

        })}
        >
        {
        myList.map((item,i)=>{
            return(
                <div className={item.double?'card-tl-container db-tl':'card-tl-container'} >
                {
                    item.double ? (
                        <>
                        {
                            item.list.map(conv=>{
                                return <div className='tl-item-container' >
                                            <div>
                                                <div className='separator-tl-line' ></div>
                                                <a className='tl-convenio-link' href={conv.link} target='blank' rel="noreferrer nofollow noopener" >{conv.text}</a>
                                            </div>
                                            <div className="tl-ver-btn-container" >
                                                <a className="norm-pdf-download" href={conv.link} target='_blank' rel="noreferrer nofollow noopener" >Ver / Descargar PDF</a>
                                            </div>
                                    </div>
                            })
                        }
                        </>
                    ):
                    <div className='tl-item-container' >
                            <div>
                                <div className='separator-tl-line' ></div>
                                <a className='tl-convenio-link' href={item.link} target='blank' rel="noreferrer nofollow noopener"
                                >{item.text}</a>
                            </div>
                            <div className="tl-ver-btn-container" >
                                <a className="norm-pdf-download" href={item.link} target='_blank' rel="noreferrer nofollow" >Ver / Descargar PDF</a>
                            </div>
                    </div>
                }
                </div>
                )
        })
        }
        </Chrono> 
        </>
    )
}

export default Timeline