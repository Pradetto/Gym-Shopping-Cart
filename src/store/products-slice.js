import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const HOST_WEBSITE_URL = "https://fitness-plus-app.herokuapp.com/";
const PRODUCTS_URL = `${HOST_WEBSITE_URL}/api/all-products/`;
const CATEGORIES_URL = `${HOST_WEBSITE_URL}/api/all-categories/`;

export const fetchProducts = createAsyncThunk("api/all-products/", async () => {
  try {
    const productsResponse = await fetch(PRODUCTS_URL);
    const productsData = await productsResponse.json();
    const categoriesResponse = await fetch(CATEGORIES_URL);
    const categoriesData = await categoriesResponse.json();
    return [productsData, categoriesData];
  } catch (err) {
    return err.message;
  }
});

// CLEAN THIS UP BELOW ADD A CHECK TO SEE IF OBJECT EXISTS SO I DO NOT HAVE TO USE A DUMMY STATE
const initialState = {
  categories: [],
  subcategories: [],
  products: [
    {
      category: "",
      id: 1,
      productDetails: {
        colors: [],
        dateCreated: "",
        imageOne: "",
        imageThree: "",
        imageTwo: "",
        newAdd: false,
        price: 1,
        productId: 0.08898430390967837,
        productName: "",
      },
      subcategory: "",
    },
  ],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeded";
        state.products = action.payload[0];
        state.categories = action.payload[1];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getAllCategories = (state) => state.products.categories;
export const getAllSubCategories = (state) => state.products.subcategories;
export const getAllProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const productsActions = productsSlice.actions;

export default productsSlice;
