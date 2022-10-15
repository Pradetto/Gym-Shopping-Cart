import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { quantity: 1, item: "hello" },
    { item: "shoes", quantity: 0 },
  ],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const index = state.items.findIndex(action.payload.id) || "Not Found";
      if (index === "Not Found") {
        state.items.push({
          quantity: 1,
          item: action.payload.item,
        });
      } else {
        state.items[index].quantity += 1;
      }
    },
    removeFromCart(state, action) {},
    clearCart(state, action) {},
    incrementItemByOne(state, action) {
      const index = state.items.findIndex(action.payload.id);
      state.items[index].quantity += 1;
    },
    decrementItemByOne(state, action) {
      const index = state.items.findIndex(action.payload.id);
      state.items[index].quantity -= 1;
      if (state.items[index].quantity <= 0) {
        state.items.splice(index, 1);
      }
    },
  },
});

const items = (state) => state.items;
const cartActions = cartSlice.actions;

export default cartSlice;
