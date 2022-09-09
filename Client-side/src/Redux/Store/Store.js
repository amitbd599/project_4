import { configureStore } from "@reduxjs/toolkit";
import SliceReducer from "../State/Slice";
const store = configureStore({
  reducer: {
    Slice: SliceReducer,
  },
});

export default store;
