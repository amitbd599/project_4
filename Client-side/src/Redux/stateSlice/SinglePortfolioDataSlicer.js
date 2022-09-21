import { createSlice } from "@reduxjs/toolkit";

export const SinglePortfolioDataSlicer = createSlice({
  name: "SinglePortfolioData",
  initialState: {
    data: [],
  },
  reducers: {
    loadSinglePortfolioData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { loadSinglePortfolioData } = SinglePortfolioDataSlicer.actions;
export default SinglePortfolioDataSlicer.reducer;
