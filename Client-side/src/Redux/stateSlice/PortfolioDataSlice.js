import { createSlice } from "@reduxjs/toolkit";

export const PortfolioDataSlice = createSlice({
  name: "PortfolioData",
  initialState: {
    data: [],
    pagination: [],
    total: 0,
  },
  reducers: {
    loadPortfolioData: (state, action) => {
      state.data = action.payload;
    },
    paginationPortfolioData: (state, action) => {
      state.pagination = action.payload;
    },
    totalPortfolioData: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const {
  loadPortfolioData,
  paginationPortfolioData,
  totalPortfolioData,
} = PortfolioDataSlice.actions;
export default PortfolioDataSlice.reducer;
