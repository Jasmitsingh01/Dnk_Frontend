import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  Cart_items: [],
  total_price: 0,
  product_to_buy: [],
  whislist_items: [],
  whislist_count:0,
  whislist_TotalPrice: 0,
};

const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      if (Array.isArray(payload)) {
        state.count += payload?.length;
        payload.map((data) => {
          state.Cart_items.push({
            ...data,
            iswhislist: true,
            cart_quantity: 1,
          });
          state.product_to_buy.push({ ...data, iswhislist: false });
          state.total_price+=data?.product_price
        });
      } else {
        state.count++;
        state.Cart_items.push({
          ...payload,
          iswhislist: false,
          cart_quantity: 1,
        });
        state.product_to_buy.push({ ...payload, iswhislist: false });
        state.total_price += payload?.product_price;
      }
    },

    addTowhislist: (state, action) => {
      const { payload } = action;
      state.whislist_count++;
      state.whislist_items.push({ ...payload, iswhislist: true });
       state.whislist_TotalPrice = state.whislist_items.reduce((sum, item) => sum + item.product_price, 0) 
    },
    deletes: (state, action) => {
      const { payload } = action;
      state.count--;
      state.Cart_items = state.Cart_items.filter((_, indx) => indx !== payload?.id);
      state.product_to_buy = state.product_to_buy.filter(
        (_, indx) => indx !== payload?.id
      );
      if (state.total_price > 0) {
        state.total_price = state.Cart_items.reduce((sum, item) => sum + item.product_price, 0) 
      }
    },
    updateprice: (state, action) => {
      const { payload } = action;
      state.Cart_items.map((item, indx) => {
        if (indx === payload.id && payload.option == "add") {
          item.cart_quantity += 1;
          state.total_price += state.Cart_items[payload.id].product_price
        } else if (
          indx === payload.id &&
          payload.option == "remove" &&
          item.cart_quantity > 1
        ) {
          item.cart_quantity -= 1;
          state.total_price -= state.Cart_items[payload.id].product_price
        }
      });
   
    },
    deletestoWhislist: (state,action) => {
      const { payload } = action;
      state.whislist_count--;
      state.whislist_items = state.whislist_items.filter((_, indx) => indx !== payload?.id);
      state.whislist_TotalPrice = state.whislist_items.reduce((sum, item) => sum + item.product_price, 0) 

   
    },
    clear: (state) => {
      state.whislist_count=0;
      state.whislist_TotalPrice = 0;
      state.whislist_items = [];
    },
  },
});

export const {
  updateprice,
  clear,
  addToCart,
  deletes,
  addTowhislist,
  deletestoWhislist,
} = Cart.actions;

export default Cart.reducer;
