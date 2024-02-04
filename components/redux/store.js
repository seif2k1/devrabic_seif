import { configureStore } from "@reduxjs/toolkit";
import Product from "./createSlice/Product";
export const store = configureStore({
  reducer: {
    cartItem: Product,
  },
});
