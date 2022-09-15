import { createSlice } from "@reduxjs/toolkit";

export const CommentSlicer = createSlice({
  name: "BlogData",
  initialState: {
    AllComment: [],
    singleComment: [],
  },
  reducers: {
    loadCommentData: (state, action) => {
      state.AllComment = action.payload;
    },
    loadSingleCommentData: (state, action) => {
      state.singleComment = action.payload;
    },
  },
});

export const { loadCommentData, loadSingleCommentData } = CommentSlicer.actions;
export default CommentSlicer.reducer;
