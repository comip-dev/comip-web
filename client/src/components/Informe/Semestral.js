import React from "react";
import './Informe.css'
const Semestral = () =>{
    return (
        <>
            <div className="normativas-title" >Informe semestral Octubre 2017 - Abril 2018</div>
            <div className="separator-auth-line" ></div>
            <div className='informe-content' >
                <p>Se presentan los resultados de los primeros seis meses de monitoreo de la pesca recreativa en el río Paraná en tramos compartidos entre Argentina y Paraguay. Período : octubre de 2017 y abril 2018.</p>
                <img className="informe-content-img" src="/images/Fauna/3_Estudios/1_PescaRecreativa/Informe Semestral/1.jpg" alt="numero de visitas"/>
                <br/>
                <p><strong>Nivel Hidrométrico</strong></p>
                <p>Las variaciones en su nivel pueden tener efecto sobre la pesca. Los niveles muy bajos dificultan la navegación y el desborde de los ríos estimula la dispersión de los peces. Las variaciones bruscas del nivel estimulan a los peces realizar migraciones ascendentes y descendentes.</p>
                <img className="informe-content-img" src="/images/Fauna/3_Estudios/1_PescaRecreativa/Informe Semestral/2.jpg" alt="numero de visitas"/>
                <img className="informe-content-img" src="/images/Fauna/3_Estudios/1_PescaRecreativa/Informe Semestral/3.jpg" alt="numero de visitas"/>
                <p><strong>Abundancia porcentual de especies capturadas</strong></p>
                <p>La boga, el dorado y el pacú fueron las especies más capturadas en este semestre. El bagre amarillo ocupó el cuarto lugar. Se mantuvo en todos los sitios casi sin excepción.</p>
            </div>
        </>
    )
}

export default Semestral