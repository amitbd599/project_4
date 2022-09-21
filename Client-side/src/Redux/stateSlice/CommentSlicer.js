import { createSlice } from "@reduxjs/toolkit";

export const CommentSlicer = createSlice({
  name: "CommentData",
  initialState: {
    AllComment: [],
    singleComment: [],
    paginationAllComment: [],
    totalCommentData: [],
    paramsCommentData: 1,
  },
  reducers: {
    loadCommentData: (state, action) => {
      state.AllComment = action.payload;
    },
    loadSingleCommentData: (state, action) => {
      state.singleComment = action.payload;
    },
    loadPaginationCommentData: (state, action) => {
      state.paginationAllComment = action.payload;
    },
    totalPaginationCommentData: (state, action) => {
      state.totalCommentData = action.payload;
    },
    ParamsPaginationCommentData: (state, action) => {
      state.paramsCommentData = action.payload;
    },
  },
});

export const {
  loadCommentData,
  loadSingleCommentData,
  loadPaginationCommentData,
  totalPaginationCommentData,
  ParamsPaginationCommentData,
} = CommentSlicer.actions;
export default CommentSlicer.reducer;
