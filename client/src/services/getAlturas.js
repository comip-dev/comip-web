import axios from '../api/index'
export const getAlturas = async () =>{
    const fetchAlturas = await axios.request('get','/alturas')
    return fetchAlturas.data
}