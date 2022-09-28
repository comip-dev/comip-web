import React from "react";

const New = ({img,title, text}) =>{
    return(
        <div className="new-container" >
            <img src={img} alt="Ilustracion noticia" className="new-img" />
            <div className="new-description-container" >
                <p className="new-title" >{title}</p>
                {/* <p className="new-text" >{text}</p> */}
            </div>
            <div className="new-overlay" >
                <div className="new-overlay-text" >Ver más</div>
            </div>
        </div>
    )
}

export default New