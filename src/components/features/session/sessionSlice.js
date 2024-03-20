import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
  name: 'break',
  initialState: {
    value: 1500,
  },
  reducers: {
    increase: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 60
    },
    decrease: (state) => {
      state.value -= 60
    },
    start: (state) => {
      state.value = 1500
    },
  },
})

// Action creators are generated for each case reducer function
export const { increase, decrease, start} = sessionSlice.actions

export default sessionSlice.reducer