import React from "react";
import DownloadTable from "./DownloadTable";
import Slider from "../Slider";


const Final = () =>{
    const newArray = new Array(10).fill(null)
    const slides= newArray.map((item,i)=>{
        return  (i===1 || i===5)?`/images/Fauna/3_Estudios/1_PescaRecreativa/Informe Final/Galería de imágenes/${i+1}.png` :`/images/Fauna/3_Estudios/1_PescaRecreativa/Informe Final/Galería de imágenes/${i+1}.jpg`
    })
    
    return (
        <>
            <div className="normativas-title" >Informe final Octubre 2017 – Octubre 2018</div>
            <div className="separator-auth-line" ></div>
            <div className='informe-content' >
                <p><strong>Se presentan los resultados de doce meses de monitoreo de la pesca recreativa en el río Paraná en tramos compartidos entre Argentina y Paraguay, obtenidos entre octubre de 2017 y octubre de 2018. </strong></p>
                <p>› Se realizaron charlas informativas a los efectos de difundir los objetivos, actividades y alcances del proyecto.</p>
                <p>› En la colecta de datos participaron: el Equipo de Fauna Íctica del Sector Medio Ambiente de la EBY, integrantes del laboratorio de Biología Pesquera Regional de la UNAM y el equipo del INICNE (UNNE). Se contó con la colaboración de pescadores y diferentes actores vinculados a la actividad.</p>
                <p>› Se emplearon diferentes modelos de planillas, y otras técnicas de recolección de datos que permitieron aumentar la calidad y cantidad de la información.</p>
                <br/>
                <p><strong>Nivel hidrométrico</strong></p>
                <p>Las variaciones en su nivel pueden tener efecto sobre la pesca. Los niveles muy bajos dificultan la navegación y el desborde de los ríos estimula la dispersión de los peces. Las variaciones bruscas del nivel estimulan a los peces realizar migraciones ascendentes y descendentes.</p>
                <img className="informe-content-img" src="/images/Fauna/3_Estudios/1_PescaRecreativa/Informe Final/1.jpg" alt="nivel hidrometrico final"/>
                <br/>
                <p><strong>Resultados</strong></p>
                <p><strong>Caracterización y resultados obtenidos, discriminados por sitio.</strong></p>
                <p>Las variaciones en su nivel pueden tener efecto sobre la pesca. Los niveles muy bajos dificultan la navegación y el desborde de los ríos estimula la dispersión de los peces. Las variaciones bruscas del nivel estimulan a los peces realizar migraciones ascendentes y descendentes.</p>
                <DownloadTable/>
                <br/>
                <p><strong>Distribución proporcional de ejemplares extraídos y devueltos discriminados por especie blanco y localidad.</strong></p>
                <p>› La pesca con devolución es la modalidad más frecuente en la Argentina, especialmente aguas abajo de Yacyretá.</p>
                <p>› En Paraguay la pesca con devolución es poco frecuente, predomina la modalidad extractiva. Con valores máximos para la boga y el salmón (no se registraron devoluciones en ningún puerto). Esto se replicó con el dorado y el pacú, aunque con diferencias entre los sitios. Se destaca el porcentaje de devolución para el surubí, el cual siendo bajo (20%) fue relativamente estable en los 4 sitios en los que se registraron capturas.</p>
                <br/>
                <div className="descarga-inf-buttons" >
                    <div className="descarga-inf-button" ><a href="https://comip.org.ar/wp-content/uploads/2019/05/pp.pdf" target='blank' >Descarga distribución de ejemplares</a></div>
                    <div className="descarga-inf-button" ><a href="https://comip.org.ar/wp-content/uploads/2019/08/INFORME-Final-COMIP-UNNE.pdf" target='blank' >Descarga Informe Final</a></div>
                </div>
                <p><strong>Período 2018 – 2019 // Pesca recreativa y marcación de peces.</strong></p>
                <br/>
                <p>› Se da continuidad al Proyecto de Evaluación de Pesca Recreativa y se incorpora la marcación de peces.</p>
                <p>› Objetivo: determinar patrones de movimiento de las especies blanco de la pesca recreativa.</p>
                <p>› Metodología: captura, marcado y recaptura. Para ello se dictan talleres de capacitación destinados a los colaboradores del proyecto en la colocación de marcas.</p>
                <div className="final-slider-container" >
                    <div className="slider-content" >
                        <Slider slides={slides}/>
                    </div>
                </div>
                <div className="final-slider-height" ></div>
            </div>
        </>
    )
}

export default Final