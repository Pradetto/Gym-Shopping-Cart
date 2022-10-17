import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 0.08898430390967837,
      size: 12,
      color: "blue",
      item: "hello",
      quantity: 1,
    },
    { id: 25, item: "shoes", quantity: 0 },
  ],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log("here is the payload", action.payload.item.productDetails);
      const index = action.payload.item
        ? state.items
            .map((i) => i.id)
            .indexOf(action.payload.item.productDetails.productId)
        : "Not Found";
      console.log(index);
      if (index === "Not Found") {
        state.items.push({
          id: action.payload.item.productDetails.productId,
          item: action.payload.item,
          quantity: 1,
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

export const items = (state) => state.items;
export const cartActions = cartSlice.actions;

export default cartSlice;
