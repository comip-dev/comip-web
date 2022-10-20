import React from "react";
import './AuthList.css'

const AuthList = ({authorities}) =>{
    return(
        <div className="auth-list-container" >
            {
                authorities.map(auth=>{
                    return (
                        <div className="authority-item" >
                            <div  >
                                <div className="auth-position" >
                                {auth.position}
                                </div>
                                <div className="authority-countries" >
                                    <div className="authority-country" >
                                        <p className="country-person" >{auth.argentina}</p>
                                        <p className="country-name" >Argentina</p>
                                    </div>
                                    <div className="authority-country" >
                                        <p className="country-person" >{auth.paraguay}</p>
                                        <p className="country-name" >Paraguay</p>
                                    </div>
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