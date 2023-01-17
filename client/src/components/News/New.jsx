import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {  deletenew } from "../../redux/reducer/newsReducer";

const New = ({img,title, text,containerStyle,id, isLogged}) =>{
    const dispatch = useDispatch()
    

    const navigate = useNavigate()
    const goTo = (id) =>{
        navigate(`/noticia/${id}`)
    }
    const handleDelete = () => {
        console.log(id)
        const data = { id}
        Swal.fire({
            title:'Desea eliminar el artículo?',
            text:title,
            icon:'question',
            confirmButtonText:'Eliminar',
            showCancelButton:true
        }).then(value=>{
            value && dispatch(deletenew(data))

        })
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
            {isLogged?<span onClick={()=>handleDelete()} class="del-new-button material-symbols-outlined">
                delete
            </span>:null}
        </div>
    )
}

export default New