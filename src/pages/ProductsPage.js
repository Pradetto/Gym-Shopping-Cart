import React, { Fragment } from "react";

//Components
import ProductsSidebar from "../components/main/ProductsSidebar";
import ProductContainer from "../components/main/ProductContainer";

// CSS
import { Center, Flex } from "@chakra-ui/react";

function Products() {
  return (
    <Fragment>
      {/* Desktop View side-by-side */}
      <Flex w={"full"} display={["none", "flex", "flex"]}>
        <Flex w={"700px"}>
          <ProductsSidebar />
        </Flex>
        <ProductContainer />
      </Flex>

      {/* Mobile View Up and Down */}
      <Flex minW={"full"} display={["flex", "none", "none"]} flexDir="column">
        <ProductsSidebar w="full" />
        <ProductContainer />
      </Flex>
    </Fragment>
  );
}

export default Products;
