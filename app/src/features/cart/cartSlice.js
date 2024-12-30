import { createSlice } from "@reduxjs/toolkit";
import { internalMemory } from "../../utility/internalMemory";

const cartSlice = () => {
  const cart = internalMemory.get("cart") || [];

  return createSlice({
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
          if (productInCart.qnt >= productInCart.cartQnt + 1) {
            productInCart.cartQnt += 1;
          }
        } else {
          state.cart.push({ ...action.payload, cartQnt: 1 });
        }

        internalMemory.save("cart", state.cart);
      },

      removeQnt: (state, action) => {
        const productInCart = state.cart.find(
          (product) => product.id === action.payload.id
        );

        if (productInCart) {
          if (productInCart.cartQnt - 1 > 0) {
            productInCart.cartQnt -= 1;
          } else {
            state.cart = state.cart.filter(
              (product) => product.id != action.payload.id
            );
          }
        }

        internalMemory.save("cart", state.cart);
      },

      showMaxQnt: (state, action) => {
        const productInCart = state.cart.find(
          (product) => product.id === action.payload.id
        );

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
        internalMemory.save("cart", state.cart);
      },
    },
  });
};

export const { addToCart, removeFromCart, removeQnt, showMaxQnt } =
  cartSlice().actions;

export default cartSlice().reducer;
