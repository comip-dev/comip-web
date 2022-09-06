import React from "react";
import './CountryInfo.css'

const CountryInfo = ({country, info}) =>{
    return(
        <div>
            <div className="footer-section-title">{country}</div>
            {
                info.map(city=>{
                    return <div className="city-container">
                        <div className="footer-city-title" >{info.ciudad}</div>
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