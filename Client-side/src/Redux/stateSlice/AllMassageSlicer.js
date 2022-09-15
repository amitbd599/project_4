import { createSlice } from "@reduxjs/toolkit";

export const AllMassageSlicer = createSlice({
  name: "BlogData",
  initialState: {
    data: [],
  },
  reducers: {
    loadMassageData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { loadMassageData } = AllMassageSlicer.actions;
export default AllMassageSlicer.reducer;
