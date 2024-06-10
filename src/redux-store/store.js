import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import cartReducer from "../reducers/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  const cartState = state.cart;
  const userState = state.user;
  localStorage.setItem("cartItems", JSON.stringify(cartState));
  localStorage.setItem("user", JSON.stringify(userState));
});
