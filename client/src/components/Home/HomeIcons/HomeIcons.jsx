import React from "react";
import waterIcon from '../../../assets/homeicons/icono-calidad-agua.png'
import riverIcon from '../../../assets/homeicons/icono-estado-rio.png'
import faunaIcon from '../../../assets/homeicons/icono-fauna-itica.png'
import methIcon from '../../../assets/homeicons/icono-meteorologia.png'
import navigationIcon from '../../../assets/homeicons/icono-navegacion.png'
import './HomeIcons.css'

const HomeIcons = () =>{
    const data = [
        {
            img:waterIcon,
            text:"Calidad del agua"
        },
        {
            img:riverIcon,
            text:"Estado del río"
        },
        {
            img:faunaIcon,
            text:"Fauna íctica"
        },
        {
            img:methIcon,
            text:"Meteorología"
        },
        {
            img:navigationIcon,
            text:"Navegación"
        },
    ]    
    return(
        <div className="icons-container" >
        {
            data.map((item)=>{
                return (
                    <div className="icon-container" >
                        <img className="icon-img" src={item.img} alt="icon"></img>
                        <div className="overlay" >
                            <div className="icon-text">{item.text}</div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default HomeIcons