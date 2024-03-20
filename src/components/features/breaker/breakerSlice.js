import { createSlice } from '@reduxjs/toolkit'

export const breakerSlice = createSlice({
  name: 'break',
  initialState: {
    value: 300,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 60
    },
    decrement: (state) => {
      state.value -= 60
    },
    initial: (state) => {
      state.value = 300
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, initial} = breakerSlice.actions

export default breakerSlice.reducer