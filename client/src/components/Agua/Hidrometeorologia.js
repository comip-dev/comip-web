import React from "react";
import { useNavigate } from "react-router-dom";
import './Hidrometeorologia.css'
import mapainteractivo from '../../assets/homepostsimgs/mapainteractivo.svg'
import r11 from '../../assets/homepostsimgs/r11.svg'
import Hidrometros from './Hidrometros'
const Hidrometeorología = ( ) => {
    const navigate = useNavigate()
    const navigateTo = (route)=>{
        navigate(`/${route}`)
    }
    
    return(
        <>
            <>
                <div className="hidro-line1-cont" >
                    <div onClick={()=>navigateTo('alturas')} className={'hidro-post-container'} >
                        <div className='carta' >
                            <div className='cara' >
                                <img className='article-img2' src='/images/Botón_Alturas-123.svg' alt="related img"/>
                                <p className='article-title'>Alturas</p>
                            </div>
                            <div className='cara detras' >                    
                                {/* <div className='article-title-back'>{title}</div> */}
                                                    
                            </div>

                        </div>
                    </div>
                    <div className={'hidro-post-container'} >
                        <a href="https://gis.comip.i-bc.com.ar/map/" target='blank' >
                            <div className='carta' >
                                <div className='cara' >
                                    <img className='article-img' src={mapainteractivo} alt="related img"/>
                                    <p className='article-title'>Mapa Interactivo</p>
                                </div>
                                <div className='cara detras' >                    
                                    {/* <div className='article-title-back'>{title}</div> */}
                                                        
                                </div>
                            </div>
                        </a>
                    </div>
                    {
                        /* <div onClick={()=>navigateTo('agua','r11')} className={'hidro-post-container'} >
                        <div className='carta' >
                            <div className='cara' >
                                <img className='article-img' src={r11} alt="related img"/>
                                <p className='article-title'>R11 - Itaipú</p>
                            </div>
                            <div className='cara detras' >                    
                        
                                                    
                            </div>

                        </div>
                    </div> */
                    }
                </div>
                <div className="hidro-line2-cont" >
                    
                </div>
                <Hidrometros/>
            </>
        </>
    )
}

export default Hidrometeorología