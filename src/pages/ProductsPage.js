import React from "react";

// Compoennts
import ProductFilterPage from "./ProductFilterPage";

// CSS
import { Flex, Grid, GridItem } from "@chakra-ui/react";

// React-Router
import { Routes, Route } from "react-router-dom";

function Products() {
  return (
    <Routes>
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
    </Routes>
  );
}

export default Products;
