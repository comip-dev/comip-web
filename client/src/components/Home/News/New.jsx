import React from "react";
import { useNavigate } from "react-router-dom";

const New = ({img,title, text,containerStyle,id}) =>{
    const navigate = useNavigate()
    const goTo = (id) =>{
        navigate(`/noticia/${id}`)
    }
    return(
        <div className={containerStyle} >
            <img src={img} alt="Ilustracion noticia" className="new-img" />
            <div className="new-description-container" >
                <p className="new-title" >{title}</p>
                {/* <p className="new-text" >{text}</p> */}
            </div>
            <div onClick={()=>goTo(id)} className="new-overlay" >
                <div className="new-overlay-text" >Ver más</div>
            </div>
        </div>
    )
}

export default New