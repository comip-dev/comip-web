import React from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { doughnutsData } from "../../assets/data/navegacion/comercial/doughnutsData";
import './DoughnutCharts.css'
const DoughnutCharts = () =>{
    const options= {
        responsive: true,
        plugins: {
            legend: {
              position: "right",
            }
        }
      }
      return(
        <>
            <div className="doughnuts-container" >
                {
                    doughnutsData.map(item=>{
                        return(
                            <div className="doughnut-container" >
                                <div className="'goughnut-title" >{item.title}</div>
                                <Chart type='doughnut' data={item.data} options={options} />
                            </div>
                        )
                    })
                }
            </div>
        </>
      )
}
export default DoughnutCharts