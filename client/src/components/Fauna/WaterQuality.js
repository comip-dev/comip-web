import React from "react";
import './WaterQuality.css'
const WaterQuality = () => {
    const headers= ["Muestra","N-Amonio","Amonio","N-Nitrito","Nitrito","N-Nitrato","Nitrato","Fosfato","Potasio"]
    const lines = [
        ['A. Sta. Isabel',"0,16","0,51","<0,02","<0,02","0,07","0,29","<0,10","2,42"],
        ['A. Sta. Lucía',"0,12",'0,40','<0,02','<0,02','0,05','0,21','<0,10','1,08'],
        ['A. Sta. María','0,60','1,97','0,02','0,06','0,07','0,29','<0,10','2,89'],
        ['A.Baí', '0,14','0,47','<0,02','<0,02','0,05','0,22','<0,10','1,60'],
        ['Río Paraná','0,10','0,15','<0,02','<0,02','<0,02','0,18','<0,10','2,00']
    ]
    return(
        <>
            <table className="water-table" >
                <tr>
                {
                    headers.map((item,i)=>{return i===0?<th>{item}</th> :<th>{item}<br/>(mg/L)</th>})
                }
                </tr>
                {
                    lines.map(line=>{
                        return(
                            <tr>
                                {
                                    line.map(item=>{return <th>{item}</th>})
                                }
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default WaterQuality