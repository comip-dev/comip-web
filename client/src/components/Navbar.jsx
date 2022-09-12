import React,{useEffect, useState} from "react";
import './Navbar.css'
import logo from '../assets/images/logo-comip2.png'
import { useNavigate } from "react-router-dom";
import {  useLocation } from "react-router-dom";
import { navOptions } from "../assets/data/navOptions";
import NavObserver from "./NavObserver";


const Navbar = () => {
    const navigate= useNavigate()
    const location = useLocation()
    const [white,setWhite] = useState(false)
    useEffect(function(){
        const onChange = (entries) =>{
            // console.log(entries)
            const el = entries [0]
            
            !el.isIntersecting ? setWhite(true) : setWhite(false)
        }
        const observer = new IntersectionObserver(onChange,{
            
        })
        observer.observe(document.getElementById("navObserver"))
    })

    const goTo = (route) => {
        navigate(`/${route}`)
    }
    return(
        <>
            
            <div className={white?"navbar-container white":"navbar-container "} >
                <div className="nav-logo">
                    <img className="comip-logo-container" src={logo} alt="logo-COMIP" ></img>
                </div>
                <div className="nav-options" >
                    {/* {
                        navOptions.map(item=>{
                            return(
                                <button
                                    className={(location.pathname=== "/home" || location.pathname==="/" ) ? " homeNav" :"nav-button "}
                                    key={item.id}
                                    onClick={()=>goTo(item.id)}
                                >{item.text}</button>
                            )
                        })
                    } */}
                    {
                    navOptions.map(item=>{
                        return(
                            <div className="dropdown" >
                                <button onClick={()=>goTo(item.id)} className="dropbtn">{item.text}</button>
                                {item.sections &&
                                    <div className="dropdown-content" >
                                        {
                                            item.sections.map((section)=>{
                                                return(
                                                    <a key={section.id} href={section.href} className=" nav-bg-hover" >{section.text}</a>
                                                )
                                            })
                                        }
                                    </div>}
                            </div>
                            
                        )
                    })

                    }
                    <div className={(location.pathname=== "/home" || location.pathname==="/" )? " separator-home" :"separator "} ></div>
                    <span 
                    class={`material-symbols-outlined search-icon${location.pathname=== "/home" ? " search-icon-home" :"search-icon "}`}
                    >search</span>
                </div>

            </div>
        </>
    )
}

export default Navbar