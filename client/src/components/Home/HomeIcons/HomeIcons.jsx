import React from "react";
import waterIcon from '../../../assets/homeicons/icono-calidad-agua.svg'
import riverIcon from '../../../assets/homeicons/icono-estado-rio.svg'
import faunaIcon from '../../../assets/homeicons/icono-fauna-itica.svg'
import methIcon from '../../../assets/homeicons/icono-meteorologia.svg'
import navigationIcon from '../../../assets/homeicons/icono-navegacion.svg'
import hoverwaterIcon from '../../../assets/homeicons/hover-icono-calidad-agua.svg'
import hoverriverIcon from '../../../assets/homeicons/hover-icono-estado-rio.svg'
import hoverfaunaIcon from '../../../assets/homeicons/hover-icono-fauna-itica.svg'
import hovermethIcon from '../../../assets/homeicons/hover-icono-meteorologia.svg'
import hovernavigationIcon from '../../../assets/homeicons/hover-icono-navegacion.svg'
import './HomeIcons.css'
import fullMethbtn from '../../../assets/homeicons/full-btn-meth.svg'

const HomeIcons = () =>{
    const data = [
        {
            img:waterIcon,
            hoverImg:hoverwaterIcon,
            text:"Calidad del agua"
        },
        {
            img:riverIcon,
            hoverImg:hoverriverIcon,
            text:"Estado del río"
        },
        {
            img:faunaIcon,
            hoverImg:hoverfaunaIcon,
            text:"Fauna íctica"
        },
        {
            img:methIcon,
            hoverImg:hovermethIcon,
            text:"Meteorología"
        },
        {
            img:navigationIcon,
            hoverImg:hovernavigationIcon,
            text:"Navegación"
        },
    ]
    function hover(element,item) {
        element.setAttribute('src', item.hoverImg);
      }
      
      function unhover(element,item) {
        element.setAttribute('src', item.img);
      }
          
    return(
        <div id="icons-container" >

            <div id="waterIcon" ></div>
            <div id="riverIcon" ></div>
            <div id="faunaIcon" ></div>
            <div id="methIcon" ></div>
            <div id="navigationIcon" ></div>
            
            
        </div>
    )
}

export default HomeIcons