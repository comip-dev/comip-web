import React from "react";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../../hooks/useWindowSize";
import './HomeIcons.css'

const HomeIcons = () =>{
    const navigate = useNavigate()
    const goTo = (section,sub) =>{
        navigate(`/${section}/${sub}`)
    }
    const windowSize = useWindowSize()
        return(
        <div className={windowSize.innerWidth>720?"icons-container":"icons-container column-icons" }>

            <div className="faunaIcon" onClick={()=>goTo('fauna','convenio')} ></div>
            <div className="riverIcon" onClick={()=>goTo('rio','cuencadelplata')} ></div>
            <div className="methIcon" onClick={()=>goTo('agua','pronostico')} ></div>
            <div className="navigationIcon" onClick={()=>goTo('nav','navegacion')}  ></div>
            <div className="waterIcon" onClick={()=>goTo('agua','calidad')} ></div>
        </div>
    )
}

export default HomeIcons