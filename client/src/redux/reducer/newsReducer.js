import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from '../../api/index'
  
  const initialState = {
    error:null,
    successUploaded: false,
    successAction:false,
    successDeleted:false,
    newImage:'',
    loading:false
}

export const addnew = createAsyncThunk(
    'addNew',
    async({data},{rejectWithValue})=>{
        try{
            const added = await axios.requestData('post','/news/add',data)
            if(added.data.status === 'ok' ) return added.data
            else return rejectWithValue(false)
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
)
export const deletenew = createAsyncThunk(
    'deletenew',
    async(data,{rejectWithValue})=>{
        try{
            const added = await axios.requestData('post','/news/remove',data)
            if(added.data.status === 'ok' ) return added.data
            else return rejectWithValue(added.data.error || false)
        }catch(e){
            console.log(e)
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
)
export const uploadImage = createAsyncThunk(
    'uploadImage',
    async ({formdata}, {rejectWithValue})=>{
        try{
            const newImage = await axios.requestData("post",`/news/uploadImage`,formdata)
            if(newImage.data.status==='ok') return newImage.data.data
            else return rejectWithValue({message:newImage.data.error||newImage.message})
        }catch(e){
            return rejectWithValue({message:e.response.data.error||e.message})
        }
    }
    )
const newsSlice = createSlice({
    name:'newsSlice',
    initialState,
    reducers:{
        cleanSuccesUploaded: (state)=>{
            state.successUploaded = false
        },
        cleanSuccess: (state)=>{
            state.successAction = false
        },
        cleanSuccessDeleted: (state)=>{
            state.successDeleted = false
        },
        cleanError: (state)=>{
            state.error = null
        },
        cleanState:(state) => state=initialState
    },
    extraReducers:{
        [uploadImage.fulfilled]: (state, {payload}) => {
            state.successUploaded = true
            state.newImage = payload;
            state.loading = false;
        },
        [uploadImage.pending]: (state, {payload}) => {
            state.loading = true;
        },
        [uploadImage.rejected]: (state, {payload}) => {
            state.loading = false;;
            state.error = payload
        },
        [addnew.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.successAction=true
        },
        [addnew.pending]: (state, {payload}) => {
            state.loading = true;
        },
        [addnew.rejected]: (state, {payload}) => {
            state.loading = false;;
            state.error = payload
        },
        [deletenew.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.successDeleted=true
        },
        [deletenew.pending]: (state, {payload}) => {
            state.loading = true;
        },
        [deletenew.rejected]: (state, {payload}) => {
            state.loading = false;;
            state.error = payload
        },
    }
})

export const {cleanError, cleanState, cleanSuccess, cleanSuccessDeleted, cleanSuccesUploaded} = newsSlice.actions
export default newsSlice.reducer