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
            const refresshing = await axios.request('post','/user/refresh')
            if(refresshing.data.status === 'ok' ) {
                localStorage.setItem("comipToken", JSON.stringify(refresshing.data.token))
                return refresshing.data.token
            }
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
    async (_,{rejectWithValue})=>{
        try{
            const logout = await axios.request('get', '/user/logout')
            if(logout.status===200 || logout.status ===204) return localStorage.removeItem("comipToken")
            else rejectWithValue('error')
        }catch(e){
            rejectWithValue(e)
        }
    }
)

const authSlice = createSlice({
    name: 'auth', 
    initialState: initialState,
    reducers:{
        cleanError: (state)=>{
            state.error = null
        },
        setCredentials:{
            reducer:(state,action)=>{
                state.isLoggedIn = true;
                state.token= action.payload;
            },
            prepare:(token)=>{
                return {payload:token}
            }

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
            state.isLoggedIn=true;
            state.token=payload
        },
        [refresh.rejected]: (state, {payload}) => {
            state.loading = false;
            state.isLoggedIn=false;
        }
        

    }
})
export const { cleanNewUser, cleanError,setCredentials } = authSlice.actions
export default authSlice.reducer