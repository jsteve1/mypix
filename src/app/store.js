import { configureStore } from '@reduxjs/toolkit'

import picsReducer from './picSlice'; 
import accountReducer from './accountSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    pics: picsReducer,
    account: accountReducer,
    ui: uiReducer
  },
})