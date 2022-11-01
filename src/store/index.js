import { configureStore } from "@reduxjs/toolkit";

// Slices
import cartSlice from "./cart-slice";
import favoritesSlice from "./favorites-slice";
import productsSlice from "./products-slice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});

export default store;
