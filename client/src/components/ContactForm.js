import React, { useState } from "react";

const ContactForm = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message:'',
      })
    const handleChange = (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    async function handleSubmit(event) {
        event.preventDefault();
        if(!state.name || !state.email || !state.subject || !state.message) alert('Debe completar todos los campos')
        else alert('Mensaje enviado')
        
    }
    return(
        <>
            
        <div className="contact-form-container">
            <br/>
            <br/>
            <form className="form-items" onSubmit={(e)=> {handleSubmit(e)} } >
                <div className="form-item" >
                    <label>Tu nombre (requerido)</label>
                    <input className="input-container" type="text" placeholder="Escribir..." name = "name" value = {state.name} onChange={(e)=> handleChange(e) } />
                </div>
                <div className="form-item" >
                    <label>Tu correo electrónico (requerido)</label>
                    <input className="input-container" type="text" placeholder="Escribir..." name = "email" value = {state.email} onChange={(e)=> handleChange(e) } />
                </div>
                <div className="form-item" >
                    <label>Asunto (requerido)</label>
                    <input className="input-container" type="text" placeholder="Escribir..." name = "subject" value = {state.subject} onChange={(e)=> handleChange(e) } />
                </div>
                <div className="form-item" >
                    <label>Tu mensaje (requerido)</label>
                    <input className="input-container" type="text" placeholder="Escribir..." name = "message" value = {state.message} onChange={(e)=> handleChange(e) } />
                </div>
                <button className="contact-submit" type="submit">Enviar</button>
                <br/>
                <br/>
                <br/>
                
            </form>
        </div>
        </>
    )
}

export default ContactForm