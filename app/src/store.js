import { configureStore } from "@reduxjs/toolkit/react";
import authReducer from "./features/auth/authSlice";
import { emptyApiSlice } from "./services/emptyApiSlice";
import categoryReducer from "./features/category/categorySlice";
import cartReducer from "./features/cart/cartSlice";
import localStorageMiddleware from "./components/middleware/localStorageMiddleware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    cart: cartReducer,
    [emptyApiSlice.reducerPath]: emptyApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptyApiSlice.middleware).concat(localStorageMiddleware),
});
