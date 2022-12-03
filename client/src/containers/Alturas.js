import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { getAlturas } from '../services/getAlturas'
import './Alturas.css'

const Alturas = () =>{
    const [alturas,setAlturas] = useState([])
    const [loading,setLoading] = useState()
    const [error,setError] = useState(null)
    // useEffect(()=>{
    //     console.log(alturas)
    // },[alturas])
    
    const headers=['ESTACIÓN','ALTURA','ALTURA ANTERIOR','VARIACIÓN','ALERTA','EVACUACIÓN', 'CAMBIO','FECHA']
    useEffect(()=>{
        async function fetchData() {
            setLoading(true)
            try{
                const fetchAlturas = await getAlturas()
                setAlturas(fetchAlturas.data)
            }catch(e){
                setError(e)
            }
            setLoading(false)
        }
        fetchData();
    },[])
    const formatDate = (date) =>{
        let array = date.split('')
        array.splice(-2,0,':').join('')
        
        return array
    }
    return(
        <>
            <div id='section-container' >
                
                <div id='comip-info-container' >
                    <div className="authorities-title" >Alturas hidrométicas (en metros)</div>
                    <div className="separator-auth-line" ></div>
                    <br/>
                    <br/>
                    <br/>
                    <div className='alturas-content' >
                        <table className="tramo-table" >
                            <tr>
                            {
                                headers.map((item,i)=>{return <th className="alturas-cell" >{item}</th> })
                            }
                            </tr>
                            {
                                alturas.map((line,i)=>{
                                    return(
                                        <tr>
                                            <th className={"alturas-cell"}>{line.PUERTO._text}</th>
                                            <th className={"alturas-cell"}>{line.ULTIMOREGISTRO._text}</th>
                                            <th className={"alturas-cell"}>{line.REGISTROANTERIOR._text}</th>
                                            <th className={"alturas-cell"}>{line.VARIACION._text}</th>
                                            <th className={"alturas-cell"}>{line.ALERTA._text}</th>
                                            <th className={"alturas-cell"}>{line.EVACUACION._text}</th>
                                            <th className={"alturas-cell"}>{line.ESTADO._text==='CRECE'?(
                                                <span class="material-symbols-outlined">
                                            arrow_upward
                                            </span>
                                            ):(
                                                <span class="material-symbols-outlined">
                                                arrow_downward
                                                </span>
                                            )}</th>
                                            <th className={"alturas-cell"}>{formatDate(line.FECHAHORA._text)}</th>
                                            
                                            
                                        </tr>

                                    )
                                })
                            }
                        </table>

                    </div>
                    <Footer/>
                </div>
                <ScrollToTop div='section-container'  />
            </div>
        </>
    )
}

export default Alturas