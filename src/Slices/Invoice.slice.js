import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Address: "",
  OrderItems: undefined,
  orderItemQunatity: undefined,
  Price: 0,
};
const Invoice = createSlice({
  name: "Invoice",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.Address = action.payload.Address;
      state.OrderItems = action.payload.OrderItems;
      state.orderItemQunatity = action.payload.orderItemQunatity;
      state.Price = action.payload.Price;
      console.log(state.Address);
    },
    RemoveDetails: (state) => {
      state.Address = "";
      state.OrderItems = undefined;
      state.orderItemQunatity = undefined;
      state.Price = 0;
    },
  },
});

export const { setDetails, RemoveDetails } = Invoice.actions;

export default Invoice.reducer;
