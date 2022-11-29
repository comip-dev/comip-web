import React from "react";
import { Parana } from "../../assets/data/navegacion/determinantes/parana";
import { Paraguay } from "../../assets/data/navegacion/determinantes/paraguay";
import './TableDet.css'

const TableDet = () =>{
    const [data, setData] = React.useState(Parana)
    const headers = Object.keys(Parana[0])
    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }
      titleCase("I'm a little tea pot")
    const titles = headers.map(string=>titleCase(string)) 
    return(
    <>
        <div className="determinanes-buttons" >
            <div onClick={()=>setData(Parana)} className={data===Parana?"det-btn-active":"det-btn"} >Río Paraná</div>
            <div onClick={()=>setData(Paraguay)} className={data===Paraguay?"det-btn-active":"det-btn"} >Río Paraguay</div>
        </div>
        <p>Fecha de actualización: 21/10/2022</p>
        <br/>
        
        {
            <table className="det-table" >
                <tr>
                {
                    titles.map((item,i)=>{return <th >{item}</th> })
                }
                </tr>
                {
                    data.map(line=>{
                        return(
                            <tr>
                                {
                                    headers.map(item=>{return <th>{line[item]}</th>})
                                }
                            </tr>
                        )
                    })
                }
            </table>
        }
    </>
    )
}

export default TableDet