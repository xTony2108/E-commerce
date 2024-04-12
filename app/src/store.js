import { configureStore } from "@reduxjs/toolkit/react";
import authReducer from "./features/auth/authSlice";
import { emptyApiSlice } from "./services/emptyApiSlice";
import categoryReducer from "./features/category/categorySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    [emptyApiSlice.reducerPath]: emptyApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptyApiSlice.middleware),
});
