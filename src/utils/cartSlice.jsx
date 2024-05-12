import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload], // Add new item to the array
      };
    },
    removeItem: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload), // Remove item by ID
      };
    },
    clearCart: (state, action) => {
      return {
        ...state,
        items: [], // Clear the cart by setting items to an empty array
      };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
