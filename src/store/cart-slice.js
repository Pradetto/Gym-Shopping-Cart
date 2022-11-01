import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const index =
        action.payload.item &&
        state.items
          .map((i) => i.id.toString() + i.size.toString() + i.color.toString())
          .indexOf(
            action.payload.item.productDetails.productId.toString() +
              action.payload.item.size.toString() +
              action.payload.item.color.toString()
          );

      if (index === -1) {
        state.items.push({
          id: action.payload.item.productDetails.productId,
          item: action.payload.item,
          quantity: 1,
          size: action.payload.item.size,
          color: action.payload.item.color,
          index: state.items.length,
        });
        state.totalAmount += action.payload.item.productDetails.price;
      } else {
        state.items[index].quantity += 1;
        state.totalAmount += action.payload.item.productDetails.price;
      }
    },
    removeFromCart(state, action) {},
    clearCart(state, action) {
      state.items = [];
      state.totalAmount = 0;
    },
    incrementItemByOne(state, action) {
      state.items[action.payload.index].quantity += 1;
      state.totalAmount +=
        state.items[action.payload.index].item.productDetails.price;
    },
    decrementItemByOne(state, action) {
      state.items[action.payload.index].quantity -= 1;
      state.totalAmount -=
        state.items[action.payload.index].item.productDetails.price;

      if (state.items[action.payload.index].quantity <= 0) {
        const newArray = state.items.filter((obj, index) => {
          return obj.index !== action.payload.index;
        });
        const updatedArray = newArray.map((obj, index) => {
          return { ...obj, index: index };
        });
        state.items = updatedArray;
      }

      if (state.totalAmount < 0.0000001) {
        state.totalAmount = 0;
      }
    },
  },
});

export const items = (state) => state.items;
export const cartActions = cartSlice.actions;

export default cartSlice;
