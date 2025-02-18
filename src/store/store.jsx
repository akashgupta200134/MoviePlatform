import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Reducers/userReducer'; // Import the default export (reducer)
import productReducer from "./Reducers/ProductReducers"

export const store = configureStore({
  reducer: {
    userReducer : userReducer, 
    productReducer: productReducer,  // ye hamara  chote choter reducers hai jinko chota sa state bhi bolte hai example product componrnt cart components etc ye sab chote chote reducres hai or states hai

  },
});
