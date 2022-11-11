import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addtoFavorites(state, action) {
      const index = state.findIndex(
        (item) =>
          item.productDetails.productId ===
          action.payload.productDetails.productId
      );

      if (index === -1) {
        state.push(action.payload);
      }
    },
    removefromFavorites(state, action) {
      const newState = state.filter(
        (item) =>
          action.payload.productDetails.productId !==
          item.productDetails.productId
      );
      return newState;
    },
  },
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice;
