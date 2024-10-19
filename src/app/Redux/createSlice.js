import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    AddtoCart: (state, action) => {
      state.push(action.payload);
    },
    RemovetoCart: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddtoCart, RemovetoCart } = counterSlice.actions;

export default counterSlice.reducer;
