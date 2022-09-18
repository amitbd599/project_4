import { createSlice } from "@reduxjs/toolkit";

export const BlogDataSlice = createSlice({ 
  name: "BlogData",
  initialState: {
    data: [],
    comment: [],
    pagination: [],  
    total: [],
    params: 1,
  },
  reducers: {
    loadData: (state, action) => {
      state.data = action.payload;
    },
    commentData: (state, action) => {
      state.comment = action.payload;
    },
    paginationData: (state, action) => {
      state.pagination = action.payload;
    },
    totalData: (state, action) => {
      state.total = action.payload;
    },
    paramsData: (state, action) => {
      state.params = action.payload;
    },
  },
});

export const { loadData, commentData, paginationData, totalData, paramsData } =
  BlogDataSlice.actions;
export default BlogDataSlice.reducer;
