import React from "react";
import { footerInfo } from "../../assets/data/footerInfo";
import CountryInfo from "./CountryInfo";
import twitterIcon from '../../assets/images/twt-icon4.png'
import linkedinIcon from '../../assets/images/in-icon3.png'
import mailIcon from '../../assets/images/apple-mail2.png'
import logo from '../../assets/images/logo-comip34.png'
import './Footer.css'
import esc_arg from '../../assets/images/escudo-argentina.png'
import esc_par from '../../assets/images/escudo-paraguay.png'


const Footer = () =>{
    return(
        <div className="footer-container" >
            <div className="middle-foot" >
                <div >
                    <img className="footer-big-icons"  src={logo} alt="logo-COMIP" ></img>
                </div>
                <div className="contact-icons">
                    <img className="footer-social-icon" src={twitterIcon} alt="Twitter icon"/>
                    <img className="footer-social-icon" src={linkedinIcon} alt="Linkedin icon"/>
                    <img className="footer-social-icon" src={mailIcon} alt="Mail icon"/>
                </div>
            </div>
            <div className="left-foot" >
                <CountryInfo country="Argentina" info={footerInfo.argentina} esc={esc_arg} />
                <img className="shield-img" alt="escudo del pais" src={esc_arg} ></img>
            </div>
            <div className="right-foot" >
                <CountryInfo country="Paraguay" info={footerInfo.paraguay} esc={esc_par} />
                <img className="shield-img" alt="escudo del pais" src={esc_par} ></img>
            </div>
        </div>
    )
}

export default Footer