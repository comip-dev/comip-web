import React from 'react'
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer/Footer';
import './Contacto.css'
const Contacto = () =>{
    
    return(
        <>
            <div className="institutional-pic" >                
                <img className="heading-pic" src='/images/Encabezado-contacto.png' alt="encabezado"/>                
            </div>
            <div id='comip-info-container' >
                <div className="authorities-title" >Contacto</div>
                <div className="separator-auth-line" ></div>
                <br/>
                <br/>
                <div className='contact-container' >
                    <ContactForm/>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Contacto