import { createSlice } from "@reduxjs/toolkit";

export const LoaderSettingSlice = createSlice({
  name: "LoaderSetting",
  initialState: {
    loader: "d-none",
  },
  reducers: {
    showLoader: (state) => {
      state.loader = "";
    },
    hideLoader: (state) => {
      state.loader = "d-none";
    },
  },
});

export const { showLoader, hideLoader } = LoaderSettingSlice.actions;
export default LoaderSettingSlice.reducer;
