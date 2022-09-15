import { createSlice } from "@reduxjs/toolkit";

export const AllMassageSlicer = createSlice({
  name: "BlogData",
  initialState: {
    data: [],
    singleData: [],
  },
  reducers: {
    loadMassageData: (state, action) => {
      state.data = action.payload;
    },
    loadSingleMassageData: (state, action) => {
      state.singleData = action.payload;
    },
  },
});

export const { loadMassageData, loadSingleMassageData } =
  AllMassageSlicer.actions;
export default AllMassageSlicer.reducer;
