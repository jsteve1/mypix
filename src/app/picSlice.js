import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pics: [],
}

export const picsSlice = createSlice({
  name: 'pics',
  initialState,
  reducers: {
    addPic: (state, action) => {
      
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