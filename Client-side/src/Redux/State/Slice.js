import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "Slice",
  initialState: {
    data: [],
  },
  reducer: {
    addData: (data) => {},
  },
});

export const { addData } = Slice.actions;
export default Slice.reducer;
