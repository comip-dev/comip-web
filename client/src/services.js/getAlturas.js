import axios from "axios"

export const getAlturas = () =>{
    const apiUrl = 'https://serviciosp.prefecturanaval.gob.ar/externo/ConsultaAlturas/Servicios/ConsultaAlturasUltimoRegistro'
    return axios.get(apiUrl)
        .then(res=> res.data)
}