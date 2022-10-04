import React,{useEffect, useState} from "react";
import './Navbar.css'
import logo from '../assets/images/logo-comip2.png'
import logoblanco from '../assets/images/logo-comip2blanco.png'
import { useNavigate } from "react-router-dom";
import {  useLocation } from "react-router-dom";
import { navOptions } from "../assets/data/navOptions";



const Navbar = () => {
    const navigate= useNavigate()
    const location = useLocation()
    
    const section = location.pathname.split('/')[1]
    console.log(section)

    const [white,setWhite] = useState(false)
    useEffect(function(){
        const onChange = (entries) =>{
            // console.log(entries)
            const el = entries[0]
            
            !el.isIntersecting ? setWhite(true) : setWhite(false)
        }
        const observer = new IntersectionObserver(onChange,{
            
        })
        observer.observe(document.getElementById("navObserver"))
    })

    const goTo = (route,seccion) => {
        if(route==="institucional") navigate(`/${route}/${seccion}`)
        // navigate(`/${route}`)
        else navigate(`/${route}`)
    }
    return(
        <>
            
            <div className={white?"navbar-container white":"navbar-container "} >

                <div onClick={()=>goTo("home")} className="nav-logo">
                    <img className="comip-logo-container" src={white?logo:logoblanco} alt="logo-COMIP" ></img>

                </div>
                <div className="nav-options" >
                    {
                    navOptions.map(item=>{
                        console.log(item.id)
                        return(
                            <div className="dropdown" >
                                <button  className={"dropbtn"}>{item.text}</button>
                                {item.sections &&
                                    <div className="dropdown-content" >
                                        {
                                            item.sections.map((section)=>{
                                                return(
                                                    <a onClick={()=>goTo(item.id,section.id)} key={section.id} href={section.href} className=" nav-bg-hover" >{section.text}</a>
                                                )
                                            })
                                        }
                                    </div>}
                            </div>
                            
                        )
                    })

                    }
                    {/* <div className={(location.pathname=== "/home" || location.pathname==="/" )? " separator-home" :"separator "} ></div>
                    <span 
                    class={`material-symbols-outlined search-icon${location.pathname=== "/home" ? " search-icon-home" :"search-icon "}`}
                    >search</span> */}
                </div>

            </div>
        </>
    )
}

export default Navbar