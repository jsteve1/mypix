import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  forgotPWModalOpened: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setForgotPWModalOpened: (state, action) => {
      state.forgotPWModalOpened = action.payload;
    }
  },
})

export const { setForgotPWModalOpened } = uiSlice.actions

export const selectForgotPWModalOpened = state => state.ui.forgotPWModalOpened;

export default uiSlice.reducer