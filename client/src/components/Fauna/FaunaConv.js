import React from "react";
import {cards} from '../../assets/data/fauna/convenioCards'
import './FaunaConv.css'
const FaunaConv = () =>{
    return(
        <>
            <div className="conv-cards-container" >
            {
                cards.map((card)=>{
                    return(
                        <div className={'conv-card-container'} >
                            <div className='conv-carta' >
                                <div className='conv-cara' >
                                    <img className='conv-img' src={card.img} alt="related img"/>
                                </div>
                                <div className='conv-cara cc-detras' >
                                    <a className='convcard-title-back' href="https://comip.org.ar/wp-content/uploads/2022/01/Resolucion-N°-07-2021-Veda-Extraordinaria-Misiones.pdf" target='_blank' rel="noreferrer nofollow" >
                                    VER + INFO 
                                    </a>
                                </div>

                            </div>
                            <div className='conv-card-title'>Reglamentación vigente</div>
                            <div className='conv-card-title-zone'>{card.zone}</div>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}
export default FaunaConv