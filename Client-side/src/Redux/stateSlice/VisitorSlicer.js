import { createSlice } from "@reduxjs/toolkit";

export const VisitorSlicer = createSlice({
  name: "VisitorData",
  initialState: {
    todayVisitor: [],
    yesterdayVisitor: [],
    PrevDayVisitor: [],
  },
  reducers: {
    loadVisitorToday: (state, action) => {
      state.todayVisitor = action.payload;
    },
    loadVisitorYesterday: (state, action) => {
      state.yesterdayVisitor = action.payload;
    },
    loadVisitorPrevDay: (state, action) => {
      state.PrevDayVisitor = action.payload;
    },
  },
});

export const { loadVisitorToday, loadVisitorYesterday, loadVisitorPrevDay } =
  VisitorSlicer.actions;
export default VisitorSlicer.reducer;
