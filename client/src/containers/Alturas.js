import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { getAlturas } from '../services.js/getAlturas'

const Alturas = () =>{
    const [alturas,setAlturas] = useState([])
    const [loading,setLoading] = useState()
    const [error,setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        const [fetchAlturas] = Promise.all([
            getAlturas()
        ]).then(()=>{
            setAlturas(fetchAlturas)
            console.log(alturas)
        }).catch(error=>{
            new Error(error)
            setError(error)
        }).finally(()=>setLoading(false))
    },[])
    return(
        <>
            <div id='section-container' >
                <div className="institutional-pic" >                
                    <img className="heading-pic" src='/images/Encabezado-contacto.png' alt="encabezado"/>                
                </div>
                <div id='comip-info-container' >
                    <div className="authorities-title" >Alturas hidrométicas (en metros)</div>
                    <div className="separator-auth-line" ></div>
                    <br/>
                    <br/>
                    
                    <Footer/>
                </div>
                <ScrollToTop div='section-container'  />
            </div>
        </>
    )
}

export default Alturas