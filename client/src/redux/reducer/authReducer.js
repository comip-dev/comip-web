import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from '../../api/index'

let token = (localStorage.getItem("comipToken")&&localStorage.getItem("comipToken")!=="undefined")
  ? JSON.parse(localStorage.getItem("comipToken"))
  : "";


const initialState = {
    isLoggedIn:false,
    token: token || null,
    loading: false,
    error: null
}


export const refresh = createAsyncThunk(
    'refresh',
    async (_,{rejectWithValue })=>{
        try{
            console.log('should be refreshing')
            const refresshing = await axios.request('post','/user/refresh')
            console.log(refresshing)
            if(refresshing.data.status === 'ok' ) return refresshing.data.token
            else return rejectWithValue(false)
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
)
export const login = createAsyncThunk(
    'login',
    async ({email,contraseña}, {rejectWithValue})=>{
        try{
            const data = {
                email,
                contraseña
            }
            const user = await axios.requestData('post',`/user/login`,data)
            // const user = await axios.post(`/users/login`,data,headers)
            console.log(user)
            if (user.data.status==='error') return rejectWithValue({message:user.data.error})
            localStorage.setItem("comipToken", JSON.stringify(user.data.token))
            return user.data
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
    )
export const logout = createAsyncThunk(
    'logout',
    async ()=>{
        localStorage.removeItem("comipToken")
    }
)

const authSlice = createSlice({
    name: 'auth', 
    initialState: initialState,
    reducers:{
        cleanError: (state)=>{
            state.error = null
        },
        setCredentials:(state)=>{
            state.isLoggedIn = true
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, {payload}) => {
            state.isLoggedIn=true
            state.token = payload.token;
            state.loading = false;
        },
        [login.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [login.pending]: (state, {payload}) => {
            state.loading = true;

        },
        [logout.fulfilled]: (state, {payload}) => {
            state.isLoggedIn=false;
            state.token = null;
            state.loading = false;
        },
        [logout.rejected]: (state, {payload}) => {
            state.loading = false;
        },
        [refresh.fulfilled]: (state, {payload}) => {
            console.log('succeed')
            state.isLoggedIn=true;
            state.token=payload
        },
        [refresh.rejected]: (state, {payload}) => {
            console.log('failed')
            state.loading = false;
        }
        

    }
})
export const { cleanNewUser, cleanError,setCredentials } = authSlice.actions
export default authSlice.reducer