import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "Profile",
  initialState: {
    value: [],
    getAllUserValue: [],
    getSingleUserValue: [],
  },
  reducers: {
    setProfile: (state, action) => {
      state.value = action.payload;
    },
    getAllUser: (state, action) => {
      state.getAllUserValue = action.payload;
    },
    getSingleUser: (state, action) => {
      state.getSingleUserValue = action.payload;
    },
  },
});

export const { setProfile, getAllUser, getSingleUser } = ProfileSlice.actions;
export default ProfileSlice.reducer;
