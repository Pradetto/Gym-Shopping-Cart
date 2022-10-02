import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const PRODUCTS_URL = "http://localhost:8000/api/all-products/";
const CATEGORIES_URL = "http://localhost:8000/api/all-categories/";

export const fetchProducts = createAsyncThunk("api/all-products/", async () => {
  try {
    const productsResponse = await fetch(PRODUCTS_URL);
    const productsData = await productsResponse.json();
    const categoriesResponse = await fetch(CATEGORIES_URL);
    const categoriesData = await categoriesResponse.json();
    console.log("Hereeee", productsData);
    return [productsData, categoriesData];
  } catch (err) {
    return err.message;
  }
});

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
        // const loadedCategories = action.payload.categoriesData.map(
        //   (category) => {
        //     return [category.category];
        //   }
        // );
        console.log("payload", action.payload[0]);
        state.products = [action.payload[0]];

        state.categories = [action.payload[1]];
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

// const sampple = {
//   category: {
//     name: "Apparel",
//     subcategories: [
//       {
//         subcategory: {
//           name: "Shirts",
//           products: [
//             {
//               productsName: "Product",
//             },
//           ],
//         },
//       },
//     ],
//   },
// };
