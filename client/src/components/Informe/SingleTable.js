import React from "react";

const SingleTable = ({list})=>{
    return(
        <>
            <div className="dl-tl-single" >

            {
                list.map(item=>{
                    return(
                        <div className="dl-table-line" >
                            <div>{item.city}</div>
                            {item.download && <a href={item.download} target="blank" >
                                <span class="material-symbols-outlined">download</span>
                            </a>}
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}
export default SingleTable