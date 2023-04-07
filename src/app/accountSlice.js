import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  loggedIn: false
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      
    },
    setLoggedIn: (state, action) => {

    }
  },
})

export const { setEmail, setLoggedIn } = accountSlice.actions

export const selectEmail = state => state.account.email;
export const selectLoggedIn = state => state.account.loggedIn;

export default accountSlice.reducer