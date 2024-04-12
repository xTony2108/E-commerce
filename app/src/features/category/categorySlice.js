import { createSlice } from "@reduxjs/toolkit/react";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryName: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.categoryName = action.payload;
    },
    removeCategory: (state, _) => {
      state.categoryName = null;
    },
  },
});

export default categorySlice.reducer;
export const { setCategory, removeCategory } = categorySlice.actions;
