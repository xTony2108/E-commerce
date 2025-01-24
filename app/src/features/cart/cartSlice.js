import { createSlice } from "@reduxjs/toolkit";
import { internalMemory } from "../../utility/internalMemory";

const cart = internalMemory.get("cart") || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart,
  },
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (productInCart) {
        const maxQnt = action.payload.cartQnt + productInCart.cartQnt;
        if (maxQnt >= productInCart.qnt) {
          productInCart.cartQnt = productInCart.qnt;
        } else {
          productInCart.cartQnt += action.payload.cartQnt;
        }
      } else {
        state.cart.push({ ...action.payload });
      }

    },

    removeQnt: (state, action) => {
      const productInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (productInCart) {
        productInCart.cartQnt =
          productInCart.cartQnt > 1 ? productInCart.cartQnt - 1 : 0;
      }

      state.cart = state.cart.filter((product) => product.cartQnt > 0);
    },

    showMaxQnt: (state, action) => {
      const productInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (productInCart && Number(action.payload.cartQnt) >= productInCart.qnt) {
        productInCart.cartQnt = productInCart.qnt;
      } else if (productInCart && Number(action.payload.cartQnt) < productInCart.qnt && Number(action.payload.cartQnt) > 0) {
        productInCart.cartQnt = Number(action.payload.cartQnt);
      } else {
        state.cart = state.cart.filter((product) => product.id !== action.payload.id);
      }

    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => action.payload.id != product.id
      );
    },
    syncCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});


export const { addToCart, removeFromCart, removeQnt, showMaxQnt, syncCart } =
  cartSlice.actions;

export default cartSlice.reducer;
