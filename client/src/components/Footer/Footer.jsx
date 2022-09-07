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
            <div className="left-foot" >
                <CountryInfo country="Argentina" info={footerInfo.argentina} />
            </div>
            <div className="middle-foot" >
                <div className="contact-icons">
                    <img className="footer-social-icon" src={twitterIcon} alt="Twitter icon"/>
                    <img className="footer-social-icon" src={linkedinIcon} alt="Linkedin icon"/>
                    <img className="footer-social-icon" src={mailIcon} alt="Mail icon"/>
                </div>
                <div className="footer-shields" >
                    <img className="footer-big-icons arg"  src={esc_arg} alt="logo-COMIP" ></img>
                    <img className="footer-big-icons"  src={logo} alt="logo-COMIP" ></img>
                    <img className="footer-big-icons"  src={esc_par} alt="logo-COMIP" ></img>
                </div>
            </div>
            <div className="right-foot" >
                <CountryInfo country="Paraguay" info={footerInfo.paraguay} />
            </div>
        </div>
    )
}

export default Footer