import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem("cart")) || {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 };
      state.cartItems.push(newItem);
    },
    increaseItemQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        return item?.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item?.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addItemToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
