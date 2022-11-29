import React from "react";
import { footerInfo } from "../../assets/data/footerInfo";
import CountryInfo from "./CountryInfo";
import twitterIcon from '../../assets/images/twt-icon4.png'
import linkedinIcon from '../../assets/images/in-icon3.png'
import mailIcon from '../../assets/images/apple-mail2.png'
import logo from '../../assets/images/LOGO-COMIP-blanco.png'
import './Footer.css'
import esc_arg from '../../assets/images/escudo-argentina.png'
import esc_par from '../../assets/images/escudo-paraguay.png'
import { useLocation } from "react-router-dom";

const Footer = () =>{
    const location = useLocation()
    console.log(location)
    return(
        <div className={location.pathname==='/home'?'footer-container-home' :"footer-container"} >
            <div className="first-footer" >
                <div className="middle-foot" >
                    <div className="footer-info-container">
                        <p>{footerInfo.info}</p>
                    </div>
                    <div className="contact-icons">
                        <img className="footer-social-icon" src={twitterIcon} alt="Twitter icon"/>
                        <img className="footer-social-icon" src={linkedinIcon} alt="Linkedin icon"/>
                        <img className="footer-social-icon" src={mailIcon} alt="Mail icon"/>
                    </div>
                </div>
                <div className="third-foot" >
                    <img className="shield-img" alt="escudo del pais" src={esc_arg} ></img>
                    <CountryInfo country="Argentina" info={footerInfo.argentina} esc={esc_arg} />
                </div>
                <div className="third-foot" >
                    <img className="shield-img" alt="escudo del pais" src={esc_par} ></img>
                    <CountryInfo country="Paraguay" info={footerInfo.paraguay} esc={esc_par} />
                </div>
            </div>
            <div className="second-footer">
                <img className="logo-footer" src={logo} alt="logo comip"/>
                <p>Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default Footer