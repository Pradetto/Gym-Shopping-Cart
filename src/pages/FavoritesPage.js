import React, { Fragment } from "react";
// Components
import ProductsContainerFavorites from "../components/main/Products/ProductContainerFavorites";

// Redux
import { useSelector } from "react-redux";

// React Router
import { Link as RouterLink } from "react-router-dom";

// CSS
import { Box, Center, VStack } from "@chakra-ui/react";
function FavoritesPage() {
  const len = useSelector((state) => state.favorites.length);
  return (
    <Fragment>
      <Center>
        <VStack>
          {!len && (
            <>
              <Box>You have no items in cart.</Box>
              <Box as={RouterLink} to="/products" color={"blue.400"}>
                Click here to shop!
              </Box>
            </>
          )}
          {len && <ProductsContainerFavorites />}
        </VStack>
      </Center>
    </Fragment>
  );
}

export default FavoritesPage;
