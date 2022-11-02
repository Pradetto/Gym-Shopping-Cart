import React, { Suspense } from "react";

// Compoennts
// import ProductFilterPage from "./ProductFilterPage";
// import ProductDetail from "../components/main/Products/ProductDetail";

// CSS
import { Center, VStack, Text, Spinner } from "@chakra-ui/react";

// React-Router
import { Routes, Route } from "react-router-dom";

const ProductFilterPage = React.lazy(() => import("./ProductFilterPage"));
const ProductDetail = React.lazy(() =>
  import("../components/main/Products/ProductDetail")
);

function Products() {
  return (
    <Suspense
      fallback={
        <Center>
          <VStack>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
            <Text fontWeight={"bold"}>Loading...</Text>
          </VStack>
        </Center>
      }
    >
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
    </Suspense>
  );
}

export default Products;
