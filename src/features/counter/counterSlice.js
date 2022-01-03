import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "dataset",
  initialState: { Name: "", Adress: "", Mobile: "", Description: "" },

  reducers: {
    incrementByAmount: (state, action) => {
      state.Name = action.payload.Name;
      state.Adress = action.payload.Adress;
      state.Mobile = action.payload.Mobile;
      state.Description = action.payload.Description;
    },
  },
});

export const { incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
