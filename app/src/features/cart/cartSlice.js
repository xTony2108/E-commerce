import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    success: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (productInCart) {
        if (productInCart.qnt >= productInCart.cartQnt + 1) {
          productInCart.cartQnt += 1;
        }
      } else {
        state.cart.push({ ...action.payload, cartQnt: 1 });
      }
    },

    removeQnt: (state, action) => {
      const productInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      console.log(action.payload.id);

      if (productInCart) {
        if (productInCart.cartQnt - 1 > 0) {
          productInCart.cartQnt -= 1;
        } else {
          state.cart = state.cart.filter(
            (product) => product.id != action.payload.id
          );
        }
      }
    },

    showMaxQnt: (state, action) => {
      const productInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );

      console.log(productInCart.qnt);
      console.log(action.payload.id, action.payload.value);

      if (productInCart) {
        productInCart.cartQnt =
          action.payload.value >= productInCart.qnt
            ? productInCart.qnt
            : Number(action.payload.value);
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => action.payload.id != product.id
      );
    },
  },
});

export const { addToCart, removeFromCart, removeQnt, showMaxQnt } =
  cartSlice.actions;

export default cartSlice.reducer;
