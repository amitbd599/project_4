import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../stateSlice/ProfileSlice";
import loaderReducer from "../stateSlice/LoaderSettingSlice";
import blogDataReducer from "../stateSlice/BlogDataSlicer";
import singleBlogDataReducer from "../stateSlice/SingleBlogDataSlicer";
import PortfolioDataReducer from "../stateSlice/PortfolioDataSlice";
import SinglePortfolioDataReducer from "../stateSlice/SinglePortfolioDataSlicer";
import AllMassageDataReducer from "../stateSlice/AllMassageSlicer";
import CommentSlicerReducer from "../stateSlice/CommentSlicer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    LoaderSetting: loaderReducer,
    BlogData: blogDataReducer,
    SingleBlogData: singleBlogDataReducer,
    PortfolioData: PortfolioDataReducer,
    SinglePortfolioData: SinglePortfolioDataReducer,
    AllMassageData: AllMassageDataReducer,
    CommentData: CommentSlicerReducer,
  },
});

export default store;
