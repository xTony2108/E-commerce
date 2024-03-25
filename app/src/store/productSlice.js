import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
    singleProduct: null,
    loading: false,
    _products: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    _setProducts: (state, action) => {
      state._products = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { setProducts, setSingleProduct, setLoading, _setProducts } =
  productSlice.actions;
