import React from "react";
import Result from "./Result";
import './ResultsList.css'
const ResultsList = ({list,addEmpty}) =>{
    return(
        <>
            <div className="resultlist-container" >
            {
                list.map(item=><Result details={item} />)
            }
            {
                addEmpty && <div className="result-container empty-item" ></div>
            }
            </div>
        </>
    )
}

export default ResultsList