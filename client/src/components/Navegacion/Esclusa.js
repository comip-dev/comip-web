import React from 'react'
import './Esclusa.css'
const Esclusa = () => {
    return(
        <>
            <p><strong>Características:</strong></p>
            <p>La esclusa de navegación está situada en el Rincón Santa María, entre los km 1464 y 1468 del río Paraná; a 10 km aguas arriba del Puerto de Ituzaingó. El cuenco de la esclusa está ubicado aguas arriba del eje general de la presa, o sea dentro del embalse. Cuenta con una longitud útil de 236 m y un ancho libre de 27 m; lateralmente está limitado por muros de hormigón coronados por una plataforma en cota 86,00 m. En ambos muros se encuentran instaladas hileras verticales de bitas embutidas, para el uso de las embarcaciones. Sobre el coronamiento se encuentran bitas de amarre para el mismo servicio. La operación de esclusado, una vez ingresadas las embarcaciones en el cuenco, demora aproximadamente 1,0 horas, hasta permitir su salida.</p>
            <div className='esclusa-download' >
                <div>Nuevo procedimiento de prioridad de esclusado de Yacyretá</div>
                <a href='https://comip.org.ar/wp-content/uploads/2020/11/Sin-titulo-2.pdf' target='blank' >
                <span class="material-symbols-outlined">download</span>
                </a>
            </div>
            <p><strong>¿Cómo funciona la Esclusa?</strong></p>
            <p>Como un "ascensor de barcos": salva el desnivel producido por la represa que iompide la libre navegacion de las embarcaciones. Al ingresar un barco, el agua sube o baja dentro del receptaculo o cuenco hasta igualar el nivel del lado de detino (embalse o rio).</p>
            <div className='esclusa-images' >
                <img src='/images/Navegacion/3_Transporte fluvial/2_Esclusa de Yacyretá/esclusa_1.jpg' alt="esclusa"/>
                <img src='/images/Navegacion/3_Transporte fluvial/2_Esclusa de Yacyretá/esclusa_2.jpg' alt="esclusa"/>
            </div>
            <table className='esclusa-table' >
                <tr>
                    <th colspan="2" >ESCLUSA DE YACYRETÁ</th>
                </tr>
                <tr>
                    <td>Dimensiones del cuenco:</td>
                    <td>ancho: 27,00 m; largo: 236,00 m</td>
                </tr>
                <tr>
                    <td>Capacidad: </td>
                    <td>un remolcador y seis barcazas de 11m de ancho y 60,00 m de largo.</td>
                </tr>
                <tr>
                    <td>Cierre inferior de la esclusa:</td>
                    <td>compuerta de busco</td>
                </tr>
                <tr>
                    <td>Dimensiones de compuerta de busco:</td>
                    <td>ancho: 27,00m; altura: 26,50m</td>
                </tr>
                <tr>
                    <td>Cierre superior de la esclusa:</td>
                    <td>compuerta plana tipo vagón</td>
                </tr>
                <tr>
                    <td>Dimensiones de compuerta tipo vagón:</td>
                    <td>ancho: 27,00m; altura: 10,75m</td>
                </tr>
            </table>
            <p><strong>Operación:</strong></p>
            <p>La navegación con trenes de barcazas encuentra en la esclusa una restricción importante. Sus dimensiones determinan que el máximo número de barcazas que pueden cruzar es de seis (6) en una formación de 2×3 más el empujador. Los convoyes con más de seis barcazas requieren más de una operación de esclusado, influyendo esto en el tiempo de pasaje.</p>
            <table className='esclusa-table' >
                <tr>
                    <th>CONFORMACIÓN DEL CONVOY</th>
                    <th>TIEMPO DE PASAJE DE LA ESCLUSA (HORAS)</th>
                </tr>
                <tr>
                    <td>2x1</td>
                    <td>1,0</td>
                </tr>
                <tr>
                    <td>2x2</td>
                    <td>1,0</td>
                </tr>
                <tr>
                    <td>2x3</td>
                    <td>1,0</td>
                </tr>
                <tr>
                    <td>2x4</td>
                    <td>3,0</td>
                </tr>
                <tr>
                    <td>3x3</td>
                    <td>3,0</td>
                </tr>
                <tr>
                    <td>3x4</td>
                    <td>3,0</td>
                </tr>
                <tr>
                    <td>4x4</td>
                    <td>5,0</td>
                </tr>
                <tr>
                    <td>4x5</td>
                    <td>7,0</td>
                </tr>
            </table>
        </>
    )
}

export default Esclusa