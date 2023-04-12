import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  forgotPWModalOpened: false,
  resizingPix: false,
  movingPix: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setForgotPWModalOpened: (state, action) => {
      state.forgotPWModalOpened = action.payload;
    },
    setResizingPix: (state, action) => {
      if(action.payload === true) {
        state.movingPix = false;
      } 
      state.resizingPix = action.payload;
    },
    setMovingPix: (state, action) => {
      if(action.payload === true) {
        state.resizingPix = false;
      }
      state.movingPix = action.payload;
    }
  },
})

export const { setForgotPWModalOpened, setResizingPix, setMovingPix } = uiSlice.actions

export const selectForgotPWModalOpened = state => state.ui.forgotPWModalOpened;
export const selectResizingPix = state => state.ui.resizingPix;
export const selectMovingPix = state => state.ui.movingPix;


export default uiSlice.reducer