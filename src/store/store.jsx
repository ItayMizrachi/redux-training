import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlide";
import booksReducer from "../features/books/booksSlice";
import storeReducer from "../features/amazStore/storeSlice";
import carShopReducer from "../features/cars/carShopSlice"
const rootReducer = combineReducers({
  todos: todoReducer,
  books: booksReducer,
  store: storeReducer,
  carShop: carShopReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
