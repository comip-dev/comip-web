import React from "react";
import './AuthList.css'

const AuthList = ({country, list}) =>{
    return(
        <div className="auth-list-container" >
                        <div className="auth-country" >{country}</div>
            {
                list.map(person=>{
                    return <>
                        <div className="auth-item" >
                            <div className={person.position==="Delegado" ? "auth-position delegado":"auth-position"} >{person.position}:</div>
                            <div className={person.position==="Delegado" ? "auth-name delegado":"auth-name"} >{person.name}</div>
                        </div>
                    </>
                })
            }
        </div>
    )
}

export default AuthList