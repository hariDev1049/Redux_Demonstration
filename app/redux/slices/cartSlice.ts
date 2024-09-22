// slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload); // Safely mutate state using Immer
    },
    // Add more reducers as needed
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
