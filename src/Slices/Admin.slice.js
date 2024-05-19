import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  AdminSidebar: false,
  AdminSide: false,
  isAdmin: false,
  AdminToken: "",
};
export const LocationSlice = createSlice({
  name: "Location",
  initialState: initialState,
  reducers: {
    SetLocation: (state) => {
      state.AdminSide = true;
    },
    RemoveLocation: (state) => {
      state.AdminSide = false;
    },
    ShowSideBar: (state, action) => {
      state.AdminSidebar = action.payload;
    },
    setActiveToken: (state, action) => {
      state.AdminToken = action.payload;
    },
    HideSideBar: (state) => {
      state.AdminSidebar = false;
    },
    SetAdmin: (state) => {
      state.isAdmin = true;
    },
    RemoveAdmin: (state) => {
      state.isAdmin = false;
    },
  },
});

export const {
  SetLocation,
  RemoveLocation,
  ShowSideBar,
  HideSideBar,
  SetAdmin,
  setActiveToken,
  RemoveAdmin,
} = LocationSlice.actions;
export default LocationSlice.reducer;
