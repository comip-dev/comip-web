import React from "react";
import './Publicaciones.css'
const Publicaciones = () =>{
    const libros = [
        {
            img:"/images/Navegacion/4_Publicaciones/La-Navegacion-en-la-Cuenca-del-Plata-Tomo-I.jpg",
            title:"La Navegación en la Cuenca del Plata",
            tomo:"Tomo I",
            link:"http://comip.org.ar/wp-content/uploads/2017/09/La%20Navegacion%20en%20la%20Cuenca%20del%20Plata,%20Tomo%20I.pdf"
        },
        {
            img:"/images/Navegacion/4_Publicaciones/La-Navegacion-en-la-Cuenca-del-Plata-Tomo-II.jpg",
            title:"La Navegación en la Cuenca del Plata",
            tomo:"Tomo II",
            link:"http://comip.org.ar/wp-content/uploads/2017/09/La%20Navegacion%20en%20la%20Cuenca%20del%20Plata,%20Tomo%20II.pdf"
        },
    ]
    return(
        <>
            <br/>
            <div className="publicaciones-container" >
            {
                libros.map(item=>{
                    return(
                        <div  className='pub-lib-container' >
                            <img className='pub-lib-img' src={item.img} alt="estadistica trafico comercial" />
                            <a href={item.link} target='blank' >
                                <div className='pub-lib-overlay' >
                                    <div>{item.title}</div>
                                    <div>{item.tomo}</div>
                                    <span class="material-symbols-outlined">download</span>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Publicaciones