import { createSlice } from "@reduxjs/toolkit";

export const SingleBlogDataSlicer = createSlice({
  name: "SingleBlogData",
  initialState: {
    data: [],
  },
  reducers: {
    loadSingleData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { loadSingleData } = SingleBlogDataSlicer.actions;
export default SingleBlogDataSlicer.reducer;
