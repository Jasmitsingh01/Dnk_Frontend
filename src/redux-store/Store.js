import { configureStore } from "@reduxjs/toolkit";
import LocationReducre from "../Slices/Admin.slice";
import AllProducts from "../Slices/AllProducts";
import CartSlice from "../Slices/Cart.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  Location: LocationReducre,
  AllProducts: AllProducts,
  Cart: CartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});
