import React from "react";
import { especies } from "../../assets/data/fauna/especies";
import Especie from "./Especie";

const EspeciesList = () => {
    return(
        <>
            <div className="especieslist-container" >
                {
                    especies.map(item=>{return <Especie details={item} />})
                }
                <div className="especie-container empty-item" ></div>
            </div>
        </>
    )
}

export default EspeciesList