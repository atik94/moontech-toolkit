import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/CartSlice";
import filterSlice from "../features/filter/FilterSlice";
// import logger from "redux-logger";
import ProductsSlice from "../features/products/ProductsSlice";

const store = configureStore({
  //devTools: false,
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    products: ProductsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
export default store;
