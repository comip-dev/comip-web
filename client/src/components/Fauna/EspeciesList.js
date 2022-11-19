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
            </div>
        </>
    )
}

export default EspeciesList