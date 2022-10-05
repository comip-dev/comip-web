import React from "react";
import waterIcon from '../../../assets/homeicons/icono-calidad-agua.svg'
import riverIcon from '../../../assets/homeicons/icono-estado-rio.svg'
import faunaIcon from '../../../assets/homeicons/icono-fauna-itica.svg'
import methIcon from '../../../assets/homeicons/icono-meteorologia.svg'
import navigationIcon from '../../../assets/homeicons/icono-navegacion.svg'
import './HomeIcons.css'
import fullMethbtn from '../../../assets/homeicons/full-btn-meth.svg'

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
        <div id="icons-container" >
        {
            data.map((item)=>{
                return (
                    <div className="icon-container" >
                        <img className={item.text==="Estado del río"?"icon-img rio-icon":"icon-img"} src={item.img} alt="icon"></img>
                            <div className="icon-text">{item.text}</div>
                        {/* <div className="overlay" >
                        </div> */}
                    </div>
                )
            })
        }
        </div>
    )
}

export default HomeIcons