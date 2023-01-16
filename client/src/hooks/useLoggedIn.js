import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from '../api/index'
import { refresh, setCredentials } from "../redux/reducer/authReducer";
let token = (localStorage.getItem("comipToken")&&localStorage.getItem("comipToken")!=="undefined")
        ? JSON.parse(localStorage.getItem("comipToken"))
        : "";

const useLoggedIn = () => {
    
    const isLogged = useSelector(state=>state.auth.isLoggedIn)
    // const[shouldRefresh,setShouldRefresh] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
        const checkLoggin = async()=>{
            try{
                const isLoggedIn = await axios.request('get','/user/islogged')
                
                if(isLoggedIn.data.status === 'ok' ) dispatch(setCredentials(true))
                else dispatch(refresh())
            }catch(e){
                console.log(e)
                
            }
        }
        if(token) checkLoggin()
    },[])
    return isLogged
}

export default useLoggedIn