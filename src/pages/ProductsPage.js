import React from "react";

// Compoennts
import ProductFilterPage from "./ProductFilterPage";
import ProductDetail from "../components/main/Products/ProductDetail";

// CSS

// React-Router
import { Routes, Route } from "react-router-dom";

function Products() {
  return (
    <Routes>
      {/* Main Products Page */}
      <Route path="" element={<ProductFilterPage />} />
      <Route path="/:categoryId/*" element={<ProductFilterPage />} />
      <Route
        path="/:categoryId/:subcategoryId/*"
        element={<ProductFilterPage />}
      />
      <Route
        path="/:categoryId/:subcategoryId/:productId"
        element={<ProductFilterPage />}
      />
      {/* Products Details Page */}
      <Route
        path="/:categoryId/:subcategoryId/:productId/details"
        element={<ProductDetail />}
      />
    </Routes>
  );
}

export default Products;
