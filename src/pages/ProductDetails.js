import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "../components/main/ProductDetail";

// NOT BEING USED RIGHT NOW
function ProductDetails() {
  return (
    <Routes>
      <Route
        path="/:categoryId/:subcategoryId/:productId/details"
        element={<ProductDetail />}
      />
    </Routes>
  );
}
export default ProductDetails;
