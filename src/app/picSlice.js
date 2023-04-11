import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pics: [],
}

export const picsSlice = createSlice({
  name: 'pics',
  initialState,
  reducers: {
    addPic: (state, action) => {
      state.pics.push(action.payload);
    },
    rmPic: (state, action) => {

    },
    updatePic: (state, action) => {

    },
  },
})

export const { addPic, rmPic, updatePic } = picsSlice.actions; 

export const selectPics = state => state.pics.pics;

export default picsSlice.reducer