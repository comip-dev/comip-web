import React from "react";
import './AuthList.css'

const AuthList = ({authorities}) =>{
    return(
        <div className="auth-list-container" >
            {
                authorities.map(auth=>{
                    return (
                        <div className="authority-item" >
                            
                                <div className="auth-position" >
                                {auth.position}
                                </div>
                                <div className="authority-countries" >
                                    <div className="authority-country" >
                                        <div className="country-person" >{auth.argentina}</div>
                                        <div className="country-name" >Argentina</div>
                                    </div>
                                    <div className="authority-country" >
                                        <div className="country-person" >{auth.paraguay}</div>
                                        <div className="country-name" >Paraguay</div>
                                    </div>
                                </div>

                            
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AuthList