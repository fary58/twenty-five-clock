import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "break",
  initialState: {
    value: 1500,
  },
  reducers: {
    increase: (state) => {
      if (state.value >= 3600) {
        return;
      } else {
        state.value += 60;
      }
    },
    decrease: (state) => {
      if (state.value < 120) {
        return;
      } else {
        state.value -= 60;
      }
    },
    start: (state) => {
      state.value = 1500;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increase, decrease, start } = sessionSlice.actions;

export default sessionSlice.reducer;
