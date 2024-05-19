import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ProductName: "",
  Productprice: 0,
};

const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setProductName: (state, action) => {
      state.ProductName = action.payload;
    },
    setProductSlices: (state, action) => {
      state.Productprice = action.payload;
    },
  },
});

export const { setProductName, setProductSlices } = filter.actions;

export default filter.reducer;
