import React from "react";
import './Regimen.css'
const Regimen = () => {
    const caudales = {
        maximos:[
            {year:1904,caudal:"53,227"},
            {year:1965,caudal:"37,885"},
            {year:1982,caudal:"50,882"},
            {year:1983,caudal:"32,735"},
            {year:1986,caudal:"38,753"},
            {year:1989,caudal:"42,788"},
            {year:1991,caudal:"48,791"},
            {year:1993,caudal:"34,929"},
            {year:1996,caudal:"33,216"},
        ],
        minimos:[
            {year:1917,caudal:"4,672"},
            {year:1924,caudal:"4,424"},
            {year:1925,caudal:"4,294"},
            {year:1944,caudal:"3,906"},
            {year:1945,caudal:"4,885"},
            {year:1949,caudal:"4,513"},
            {year:1951,caudal:"4,581"},
            {year:1952,caudal:"4,491"},
            {year:1955,caudal:"4,982"},
        ],
    }
    return(
        <>
        
            <div className="regimen-container" >
                <p>› Las variaciones de caudal del río dependen de las precipitaciones. El Paraná atraviesa zonas con una gran variedad climática.</p>
                
                <p>› En el alto presenta una creciente anual durante el verano, mientras que los cursos medio e inferior ven modificado su régimen por los aportes del sus afluentes, provocando una segunda creciente durante el invierno.</p>
                
                <p>› El máximo caudal del río se registra hacia fines del verano (febrero–marzo) y el estiaje a fines del invierno (agosto–septiembre).</p>
                
                <p>Al desembocar en el Río de la Plata (considerando todos los brazos de su delta), su caudal da una media de entre 17.000 y 20.000m³/s.; comparable a la de ríos como el Misisipi (18 000 m³/s) y el Ganges (16 000 m³/s).</p>
            </div>
            <div className="reg-tables" >
                <div className="reg-table" >
                    <div className="reg-table-header" >MÁXIMOS</div>
                    <div className="reg-table-subheader" >
                        <div className="left-cell" >AÑO</div>
                        <div className="right-cell" >CAUDAL (m<sup>3</sup>/s)</div>
                    </div>
                        {
                            caudales.maximos.map((item,i)=>{
                                const isTop=  i===0
                                const isBottom= i===(caudales.minimos.length - 1)
                                return (
                                    <div className={isTop?"reg-table-line line-top":isBottom?"reg-table-line line-bottom":"reg-table-line"} >
                                        <div className="left-cell" >{item.year}</div>
                                        <div className="right-cell" >{item.caudal}</div>
                                    </div>
                                )
                            })
                        }
                </div>
                <div className="reg-table" >
                    <div className="reg-table-header" >MÍNIMOS</div>
                    <div className="reg-table-subheader" >
                        <div className="left-cell" >AÑO</div>
                        <div className="right-cell" >CAUDAL (m<sup>3</sup>/s)</div>
                    </div>
                        {
                            caudales.minimos.map((item,i)=>{
                                const isTop=  i===0
                                const isBottom= i===(caudales.minimos.length - 1)
                                console.log(i,isTop,isBottom)
                                return (
                                    <div className={isTop?"reg-table-line line-top":isBottom?"reg-table-line line-bottom":"reg-table-line"} >
                                        <div className="left-cell" >{item.year}</div>
                                        <div className="right-cell" >{item.caudal}</div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
                <p className="res-table-footer">CAUDALES MÁXIMOS Y MÍNIMOS DEL RÍO PARANÁ EN LA ESTACIÓN HIDROMÉTRICA POSADAS (ITA CUA)</p>
                <p className="res-table-footer">FUENTE: SUBSECRETARÍA DE RECURSOS HÍDRICOS</p>
        </>
    )
}

export default Regimen