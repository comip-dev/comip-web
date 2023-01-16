import { configureStore} from '@reduxjs/toolkit'
import authSlice from "../reducer/authReducer.js";
import newsSlice from "../reducer/newsReducer";

const store =configureStore({
    reducer:{
        auth:authSlice,
        news: newsSlice
    }
});

export default store;