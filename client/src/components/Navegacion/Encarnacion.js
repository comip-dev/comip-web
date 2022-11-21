import React from 'react'
import './Encarnacion.css'

const Encarnacion = () =>{
    const cards = [
        {
            text:"Acta de Reunión Binacional",
            date:"25/06/19",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/01-Acta-de-Reunion-Binacional-25-06-19.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"13/01/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/05-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-13-01-2020.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"23/04/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/09-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-23-04-2020.pdf"
        },
        {
            text:"Reunión Bilateral Navegación",
            date:"03/07/2019",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/01-Acta-de-Reunion-Binacional-25-06-19.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"7/02/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/06-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-7-02-2020_compressed-1.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"03/06/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/11-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-03-06-2020.pdf"
        },
        {
            text:"Acta de Reunión - Posadas",
            date:"20/08/2019",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/03-Acta-de-Reunion-Posadas-20-08-2019.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"27/02/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/07-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-27-02-2020.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"19/06/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/12-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-19-06-2020.pdf"
        },
        {
            text:"Acta de Reunion - Asunción",
            date:"29/08/2019",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/04-Acta-de-Reunion-Asuncion-29-08-2019.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"04/03/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/08-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-04-03-2020.pdf"
        },
        {
            text:"Acta Reunión Plenaria Grupo Encarnación",
            date:"25/06/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/13-Acta-Reunion-Plenaria-Grupo-de-Trabajo-Encarnacion-25-06-2020.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"03/07/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/14-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-03-07-2020.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"30/10/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/18-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-30-10-2020.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"15/01/2021",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/22-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-15-01-2021.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"21/07/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/15-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-21-07-2020.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"10/11/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/19-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-10-11-2020.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"26/02/2021",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/23-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-26-02-2021.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"25/08/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/16-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-25-08-2020.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"18/12/2020",
            link:"http://comip.org.ar/wp-content/uploads/2017/05/encENIO-FIRMADO-UNaM.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"22/09/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/17-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-22-09-2020.pdf"
        },
        {
            text:"Acta Reunión del Grupo de Trabajo Encarnación",
            date:"28/12/2020",
            link:"https://comip.org.ar/wp-content/uploads/2021/03/21-Acta-Reunion-del-Grupo-de-Trabajo-Encarnacion-28-12-2020.pdf"
        },
    ]
    return(
        <>
            <div className='encarnacion-cards-container' >
                {
                    cards.map(card=>{
                        return(
                            <div className={'enc-card-container'} >
                                <div className='enc-carta' >
                                    <div className='enc-cara' >
                                        <div>{card.text}</div>
                                        <div>{card.date}</div>
                                    </div>
                                    <div className='enc-cara cc-detras' >
                                        <a className='enccard-title-back' href={card.link} target='_blank' rel="noreferrer nofollow" >
                                        Descargar PDF
                                        </a>
                                    </div>

                                </div>
                            </div>
                        )
                    })

                }

            </div>
        </>
    )
}

export default Encarnacion