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

      // NEED TO FIX THIS LINE BELOW
      if (state.items[action.payload.index].quantity <= 0) {
        const removedArray = state.items.splice(action.payload.index, 1);
        // console.log(removedArray);
        const updatedArray = removedArray.map((obj, index) => {
          return { ...obj, index: index };
        });
        console.log(updatedArray);
        state.items = updatedArray;
        state.totalAmount = 0;
      }
    },
  },
});

export const items = (state) => state.items;
export const cartActions = cartSlice.actions;

export default cartSlice;

// {
//   id: 0.08898430390967837,
//   size: 12,
//   color: "blue",
//   item: "hello",
//   quantity: 1,
// },
