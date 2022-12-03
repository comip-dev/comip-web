import React from "react";
import './Trayectos.css'
const Trayectos = () =>{
    const headers = ['TRAYECTOS','PASOS','KM','PLANIMETRIA']
    const lines=[
        ['PASO NARANJITO MBARACAYA','1460,0 a 1465,0','https://comip.org.ar/wp-content/uploads/2020/08/TY1-Naranjito-11-2019-1.pdf'],
        ['PASO LORO CUARTO, ITUZAINGÓ Y CEMENTERIO','1449,4 a 1459,5','https://comip.org.ar/wp-content/uploads/2020/08/TY2-LoroCuarto-Cementerio_10-2019-1.pdf'],
        ['PASO PUNTA ÑARO','1439,5 a 1448,5','https://comip.org.ar/wp-content/uploads/2021/11/TY3-Punta-Naro_11-2019.pdf'],
        ['PASO ZANGARA','1434,0 a 1438,2','https://comip.org.ar/wp-content/uploads/2020/08/TY4-Zangara-11-2019-2.pdf'],
        ['PASO PUNTA MERCEDES','1423,1 a 1426,2','https://comip.org.ar/wp-content/uploads/2020/08/TY5-Punta-Mercedes_11-2019.pdf'],
        ['PASO VIZCAÍNO','1415,0 a 1421,0','https://comip.org.ar/wp-content/uploads/2020/08/ilovepdf_merged-5.pdf'],
        ['PASO LAS PALMAS Y PASO KURÉ - SAN PABLO','1402,5 a 1407,0','https://comip.org.ar/wp-content/uploads/2020/08/ilovepdf_merged-6.pdf'],
        ['PASO CANCHA SANTA LUCIA, CANCHA DORADA Y CARPINCHERO','1386, 5 a 1395,0','https://comip.org.ar/wp-content/uploads/2020/08/ilovepdf_merged-7.pdf'],
        ['PASO ENTRE RÍOS','1363,0 a 1373,5','https://comip.org.ar/wp-content/uploads/2020/08/TY9-Entre-Rios-11-2019.pdf'],
        ['PASO SANTA ISABEL','1352,2 a 1363,8','https://comip.org.ar/wp-content/uploads/2020/08/ilovepdf_merged-8.pdf'],
        ['PASO CERRITO','1339,4 a 1346,1','https://comip.org.ar/wp-content/uploads/2021/11/TY11-Cerrito-11-2019-1.pdf'],
        ['PASO TUYUTI','1327,8 a 1334,8','https://comip.org.ar/wp-content/uploads/2020/08/TY12-Tuyuti-11-2019-1.pdf'],
        ['PASO ABRA','1321,0 a 1326,0','https://comip.org.ar/wp-content/uploads/2020/08/TY13-Abra-11-2019.pdf'],
        ['PASO YRIBU CUA','1307,0 a 1312,0','https://comip.org.ar/wp-content/uploads/2020/08/TY14-Yribu-Cua-11-2019-1.pdf'],
        ['PASO PALMIRA','1292,4 a 1301,5','https://comip.org.ar/wp-content/uploads/2020/08/TY15-Palmira-11-2019.pdf'],
        ['PASO ISLA VERDE','1281,5 a 1286,8','https://comip.org.ar/wp-content/uploads/2021/11/TY17-Caavera-Itati-12-2019.pdf'],
        ['PASO CAA VERA – ITATI','1267,5 a 1281,5','https://comip.org.ar/wp-content/uploads/2021/11/TY17-Caavera-Itati-12-2019.pdf'],
        ['PASO CARAYACITO - CAMBA ACA','1248,0 a 1258,3','https://comip.org.ar/wp-content/uploads/2020/08/TY18-Carayacito-Camba-Aca-12-2019.pdf'],
    ]
    return(
    <>
            <p>De acuerdo a la necesidad para el mejoramiento de los pasos críticos, se elaboró el Informe PASOS URGENTES, que determinó, con fecha 13 de noviembre de 2019, que los señores cancilleres de Argentina y Paraguay acordarán mediante intercambio de notas el dragado de pasos críticos.</p>
            <br/>
            <table className="tramo-table" >
                <tr>
                {
                    headers.map((item,i)=>{return <th className={i===0?"trayecto-cell":(i===3?"tramo-btn-dl-head":null)} >{item}</th> })
                }
                </tr>
                {
                    lines.map((line,i)=>{
                        return(
                            <tr>
                                <th className="trayecto-cell" >TRAYECTO {i+1}</th>
                                {
                                    line.map((item,j)=>{
                                        return j!==2?<th className={j===0?"pasos-cell":"km-cell"}>{item}</th>:null
                                        })
                                }
                                <th><a className='tramo-btn-dl' href={line[2]} target='blank' ><span class="material-symbols-outlined">download</span></a></th>
                            </tr>

                        )
                    })
                }
            </table>
        </>)
}

export default Trayectos