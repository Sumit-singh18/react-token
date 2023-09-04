import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ['b', 'c'],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});
export const { addItems, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
