import React from "react";
import { useNavigate } from "react-router-dom";
import './HomeIcons.css'


const HomeIcons = () =>{
    const navigate = useNavigate()
    const goTo = (section,sub) =>{
        navigate(`/${section}/${sub}`)
    }
        return(
        <div id="icons-container" >

            <div id="faunaIcon"  onClick={()=>goTo('fauna','convenio')} ></div>
            <div id="riverIcon"  onClick={()=>goTo('rio','cuencadelplata')} ></div>
            <div id="methIcon"  onClick={()=>goTo('agua','pronostico')} ></div>
            <div id="navigationIcon" onClick={()=>goTo('nav','navegacion')}  ></div>
            <div id="waterIcon"  onClick={()=>goTo('agua','calidad')} ></div>
        </div>
    )
}

export default HomeIcons