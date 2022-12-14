import React, { Fragment, useEffect, useState } from "react";

// Components
import ProductContainerCard from "./ProductContainerCard";

// Redux
import { useDispatch } from "react-redux";

import { fetchProducts } from "../../../store/products-slice";

// CSS
import { Spinner, Text, VStack, Center } from "@chakra-ui/react";

function ProductContainer() {
  const dispatch = useDispatch();
  // const status = useSelector(getProductsStatus);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchProducts()).then(() => setLoading(false));
  }, [dispatch]);

  return (
    <Fragment>
      {!isLoading && <ProductContainerCard />}
      {isLoading && (
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
      )}
    </Fragment>
  );
}

export default ProductContainer;
