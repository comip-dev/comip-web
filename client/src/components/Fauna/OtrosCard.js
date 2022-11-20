import React from "react";
import './OtrosCard.css'
const OtrosCard = ({details}) => {
    return(
        <div className="otroscard-container" >
            <div className="otroscard-title-container" >
                <div className="subsection-title" >{details.title}</div>
                <div className="otroscard-subtitle" >{details.subtitle}</div>
            </div>
            <img src={details.img} alt={details.title} />
            <br/>
            <br/>
            {
                details.biblioteca?(
            <div className="otroscard-button" onClick={details.action} >Ir a la biblioteca</div>
                ):(
            <div className="otroscard-button" >
            <a href={details.action} target="blank">{details.buttontext}</a></div>
                    
                )
            }
        </div>
    )
}

export default OtrosCard