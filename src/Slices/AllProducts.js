import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Product: undefined,
};

const AllProducts = createSlice({
  name: "AllProducts",
  initialState,
  reducers: {
    AddProduct: (state, action) => {
      const { payload } = action;
      state.Product = payload;
    },
    DeleteProduct: (state) => {
      state.Product = undefined;
    },
  },
});
export const { AddProduct, DeleteProduct } = AllProducts.actions;
export default AllProducts.reducer;
