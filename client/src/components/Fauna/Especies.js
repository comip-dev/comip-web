import React from "react";
import './Especies.css'
import EspeciesList from "./EspeciesList";
const Especies = () =>{
    return(
        <>
            <p>El límite geográfico entre las Repúblicas de Argentina y el Paraguay comprende tramos del río Paraná y del río Paraguay, conocidos como <i>Alto Paraná</i> y <i>Paraguay Inferior.</i></p>
            <p>Esta región contiene una diversidad de peces muy importantes, contando con cerca de 200 especies, lo que representa aproximadamente un tercio del total de especies de toda la Cuenca del Plata.</p>
            <p>La diversidad de especies es aprovechada por el hombre haciendo diferentes usos sobre una veintena de peces. Estos usos son principalmente recreativos como la pesca recreativa y los concursos de pesca, pero a la vez esta forma de uso del recurso genera un ingreso económico importante para la región, tanto por la actividad turística de la pesca recreativa, como por todo el abastecimiento que el turismo necesita. Se incluye entre estos últimos una pesca de peces para carnadas que abastece a la pesca deportiva.</p>
            <p>Por último, la pesca comercial está limitada espacialmente solo a las orillas de los ríos Paraná y Paraguay con la salvedad que en costas de la Provincia de Corrientes no está permitida. Esta pesca es considerada artesanal ya que sus artes de pesca y embarcaciones son habitualmente confeccionadas a mano.</p>
            <br/>
            <div className="subsection" >
                <div className="subsection-title" >Especies de relevancia</div>
                <p>El criterio de selección se basa en las especies más capturadas en la región, asi como algunas de características biológicas relevantes.</p>
                <p >La descripción de cada especie es modificada en parte del libro: <a className="subsection-especies-link" target='_blank' rel="noreferrer nofollow" href="https://comip.org.ar/wp-content/uploads/2020/11/GuiadelospecesdelParqueNacionalPre-Delta__AlmirnCasciottaCiotekyGiorgis2015_compressed-1.pdf"><b><i>Guia de los peces del Parque Nacional Pre-Delta </i></b><i>/ Adriana Almirón; Jorge Casciotta; Liliana Ciotek; Pablo Giorgis. – 2da ed. – Ciudad Autónoma de Buenos Aires: Administracion de Parques Nacionales, 2015. </i></a></p>
                <br/>
                <br/>

                <EspeciesList/>
            </div>
            <div className="esp-libros-container" >
                <div className="esp-libros-title" >Libros publicados</div>
                
                <p className='libros-line-separator' ></p>
                
                <div className="libros-list" >
                    <div className="libro-cont" >
                        <div className="libro-title" >La Fauna Íctica del Río Paraná</div>
                        <a href="https://comip.org.ar/wp-content/uploads/2020/11/La-Fauna-Ictica-del-Rio-Parana_compressed-1.pdf" target='blank'>
                            <img src="/images/Fauna/2_Especies/Libro01.png" alt="portada de libro" />

                        </a>
                    </div>
                    <div className="libro-cont" >
                        <div className="libro-title" >Guía de los Peces del Parque Nacional Pre-Delta</div>
                        <a href="https://comip.org.ar/wp-content/uploads/2020/11/GuiadelospecesdelParqueNacionalPre-Delta__AlmirnCasciottaCiotekyGiorgis2015_compressed-1.pdf" target='blank'> 
                            <img src="/images/Fauna/2_Especies/Libro02.png" alt="portada de libro" />

                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Especies