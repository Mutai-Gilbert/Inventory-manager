import { configureStore } from '@reduxjs/toolkit'
import formReducer from './createSlice';


export const store = configureStore({
    form: formReducer,
});