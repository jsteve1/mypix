import { configureStore } from '@reduxjs/toolkit'
import picsReducer from './picSlice'; 
import accountReducer from './accountSlice';

export const store = configureStore({
  reducer: {
    pics: picsReducer,
    account: accountReducer,
  },
})