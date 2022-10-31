import React from "react";
import Footer from "../Footer/Footer";
import './Convenios.css'

const Convenios =() =>{
    const HeadingPic = "https://res.cloudinary.com/diqcwn9e9/image/upload/v1666223906/comip/institucional/Banderas-Paraguay-Argentina_ed3pln.jpg"
    const conveniosList=[
        {
            title:"CONVENIO COMIP - SSPVNyMM - 27/10/2021",
            description:"",
            link:"https://comip.org.ar/wp-content/uploads/2021/11/CONVENIO-SSPVNyMM-COMIP-2021.pdf"
        },
        {
            title:"CONVENIO UNNE - COMIP - 29/04/2021",
            description:"",
            link:"https://comip.org.ar/wp-content/uploads/2021/11/CONVENIO-UNNE-COMIP-2021.pdf"
        },
        {
            title:"CONVENIO INA - COMIP - 27/04/2021",
            description:"",
            link:"https://comip.org.ar/wp-content/uploads/2021/11/CONVENIO-INA-COMIP-2021.pdf"
        },
        {
            title:"CONVENIO DE COMIP CON RECURSOS HÍDRICOS - 30/12/2018",
            description:"",
            link:"https://comip.org.ar/wp-content/uploads/2019/02/ACTA-DE-REUNION-RECURSOS-HIDRICOS.pdf"
        },
        {
            title:"CONVENIO CON PREFECTURA NAVAL ARGENTINA - 24/07/2018",
            description:"",
            link:"https://comip.org.ar/wp-content/uploads/2019/02/CONVENIO-PNA-2018.pdf"
        },
        {
            title:"CONVENIO MARCO ENTRE COMIP Y CONAE 20/03/2018",
            description:"",
            link:"https://comip.org.ar/wp-content/uploads/2019/02/Convenio-Marco-COMIP-CONAE.pdf"
        },
        {
            title:"CONVENIO CON EL INSTITUTO GEOGRÁFICO NACIONAL 30/05/2017",
            description:"",
            link:"https://comip.org.ar/wp-content/uploads/2017/06/CONVENIO-FINAL.pdf"
        },
        {
            title:"CONVENIO CON LA UNIVERSIDAD NACIONAL DE MISIONES 05/04/2017",
            description:"",
            link:"https://comip.org.ar/wp-content/uploads/2017/05/CONVENIO-FIRMADO-UNaM.pdf"
        },
        {
            title:"ACUERDO DE COOPERACIÓN ITAIPÚ - COMIP 30/03/2017",
            description:"",
            link:"https://comip.org.ar/wp-content/uploads/2017/11/Acuerdo-de-Cooperacion-JEA-004-2017-Itaipu-COMIP-1.pdf"
        },
        {
            title:"CONVENIO DE COOPERACION ENTRE UNNE Y COMIP 16/02/2017",
            description:"",
            link:"https://comip.org.ar/wp-content/uploads/2017/05/CONVENIO-FIRMADO-UNNE.pdf"
        },
        {
            title:"MEMORANDO DE ENTENDIMIENTO CON CORRIENTES 01/02/2017",
            description:"",
            link:"https://comip.org.ar/wp-content/uploads/2017/05/Memo-Corrientes-Comip.pdf"
        },
        {
            title:"CONVENIO DE COOPERACIÓN UNI - COMIP 30/05/2014",
            description:"",
            link:"https://comip.org.ar/wp-content/uploads/2020/11/Convenio-de-Cooperación-UNI-COMIP-2.pdf"
        },
        {
            title:"CONVENIO MARCO ENTRE YACIRETÁ Y COMIP 02/03/2001",
            description:"",
            link:"https://comip.org.ar/wp-content/uploads/2017/11/002CONV-EBY-COMIP-2001-RENOVAC-AUTOMAT.pdf"
        },
    ]
    return(
        <>
            <div className="institutional-pic" >
                <img className="heading-pic" src={HeadingPic} alt="encabezado"/>
            </div>
            <div  className="authorities-container" >
                <div className="authorities-title" >Convenios de Cooperación</div>
                <div className="separator-auth-line" ></div>
                <div className="convenios-container" >
                    {
                        conveniosList.map((convenio)=>{
                            return (
                                <div className="convenio-container" >
                                    <a href={convenio.link} target='_blank' rel="noreferrer nofollow">
                                        {convenio.title}
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            <Footer/>
            </div>
        </>
    )
}

export default Convenios