import React from "react";


const PuertosBtn = () =>{
    const hidroviaImg = '/images/Navegacion/3_Transporte fluvial/3_Puertos/hidrovia-paraguay-parana-04.jpg'
    const puertosImg='/images/Navegacion/3_Transporte fluvial/3_Puertos/puertos-02_optimized.jpg'
    const [img, setImg] = React.useState(hidroviaImg)
    
    return(
    <>
        <p>Fecha de actualización: 21/10/2022</p>
        <br/>
        <div className="determinanes-buttons" >
            <div onClick={()=>setImg(hidroviaImg)} className={img===hidroviaImg?"det-btn-active":"det-btn"} >Hidrovía</div>
            <div onClick={()=>setImg(puertosImg)} className={img===puertosImg?"det-btn-active":"det-btn"} >Puertos comerciales</div>
        </div>
        <br/>
        <br/>
        <img className="puertos-btn-img" src={img} alt='Puertos' />
    </>
    )
}

export default PuertosBtn