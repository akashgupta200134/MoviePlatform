import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Reducers/userReducer'; // Import the default export (reducer)

export const store = configureStore({
  reducer: {
    userReducer : userReducer,
    
  },
});
