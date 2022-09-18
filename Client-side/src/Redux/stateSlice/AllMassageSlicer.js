import { createSlice } from "@reduxjs/toolkit";

export const AllMassageSlicer = createSlice({
  name: "AllMassageData",
  initialState: {
    MassageData: [],
    PaginationMassageData: [],
    singleData: [],
    totalMassageData: [],
    paramsMassageData: 1,
  },
  reducers: {
    loadMassageData: (state, action) => {
      state.MassageData = action.payload;
    },
    loadPaginationMassageData: (state, action) => {
      state.PaginationMassageData = action.payload;
    },
    loadSingleMassageData: (state, action) => {
      state.singleData = action.payload;
    },
    totalMassage: (state, action) => {
      state.totalMassageData = action.payload;
    },
    paramsMassage: (state, action) => {
      state.paramsMassageData = action.payload;
    },
  },
});

export const {
  loadMassageData,
  loadSingleMassageData,
  loadPaginationMassageData,
  totalMassage,
  paramsMassage,
} = AllMassageSlicer.actions;
export default AllMassageSlicer.reducer;
