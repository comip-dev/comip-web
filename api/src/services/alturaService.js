const axios = require('axios')
var convert = require('xml-js');
const alturasCities = require('../utils/alturasCities')
const getConfig = async () => {
    const config = {
        baseUrl: 'https://serviciosp.prefecturanaval.gob.ar/externo/ConsultaAlturas/Servicios/ConsultaAlturasUltimoRegistro',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'origin':'x-requested-with',
            'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
            'Content-Type': 'application/json',
        }
    }
    return config;
};

const getAlturas = async()=>{
    const replaceTags=(val)=> {
        return val.replace('ent:','').replace('soapenv:','').replace('tem:','').toUpperCase();}
    return new Promise(async(resolve,reject)=>{
        try{
            const CancelToken = axios.CancelToken;
            let source = CancelToken.source();
            const config = await getConfig();
        
            setTimeout(() => {
                source.cancel();
            }, 50000);
            const alturas = await axios({
                method: 'GET',
                baseURL: config.baseUrl,
                url: config.baseUrl,
                headers: config.headers,
                cancelToken: source.token
            })
            const xml = alturas.data
            let fetchData = convert.xml2json(xml, {compact:true,elementNameFn:replaceTags,ignoreAttributes:true });
            const parsed = JSON.parse(fetchData)
            const data = parsed.ENVELOPE.BODY.OBTENERULTIMOREPORTESRESPONSE.OBTENERULTIMOREPORTESRESULT.REPORTES.REPORTEULTIMOCLASS
            const dataToSend = data.filter(item=>alturasCities.includes(item.PUERTO._text))
            resolve(dataToSend)
        }catch(e){
            console.log(`error on alturaService.js line 34: ${e.message}`)
            reject( e.message||e)
        }

    })
}
module.exports={
    getAlturas
}