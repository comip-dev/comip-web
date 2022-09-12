import React from "react";
import './CountryInfo.css'

const CountryInfo = ({country, info,esc}) =>{
    
    return(
            
            <div className="country-container" >
                <div className="footer-section-title">{country}</div>
                {
                    info.map(city=>{
                        return <div className="city-container">
                            <div className="footer-city-title" >{city.ciudad}</div>
                            <div className="contact-info" >
                                <div>{city.direccion}</div>
                                <div>{city.tel}</div>
                                <div>{city.email}</div>
                            </div>
                        </div>
                    })
                }
            </div>
            
            
        
    )
}

export default CountryInfo