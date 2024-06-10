import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem("cartItems")) || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 };
      state.push(newItem);
    },
    increaseItemQuantity: (state, action) => {
      state = state.map((item) => {
        return item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state = state.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    },
    deleteItem: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
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
