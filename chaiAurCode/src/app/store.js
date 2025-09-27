import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; 
import productReducer from "../features/todo/productSlice";
export const store = configureStore({
  reducer: {
    todo: todoReducer, 
    product: productReducer,
  },
})