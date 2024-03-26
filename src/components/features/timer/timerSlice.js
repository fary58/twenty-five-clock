import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "break",
  initialState: {
    value: 1500,
  },
  reducers: {
    increaseTime: (state) => {
      if (state.value >= 3600) {
        return;
      } else {
        state.value += 60;
      }
    },
    decreaseTime: (state) => {
      if (state.value == 0) {
        return;
      } else {
        state.value -= 60;
      }
    },
    setActual: (state,amount) => {
      console.log(amount);
      if (state.value < 0) {
        return;
      } else {
        state.value = amount.payload;
      }
    },
    startTime: (state) => {
      state.value = 1500;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increaseTime, decreaseTime, start,setActual,startTime } = timerSlice.actions;

export default timerSlice.reducer;
