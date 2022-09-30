import React, { Fragment } from "react";

//Components
import ProductsSidebar from "../components/main/ProductsSidebar";
import ProductContainer from "../components/main/ProductContainer";

// CSS
import { Flex, Grid, GridItem } from "@chakra-ui/react";

function ProductFilterPage() {
  return (
    <Fragment>
      {/* Desktop View side-by-side */}
      <Flex display={["none", "flex", "flex"]}>
        <Grid gridTemplateColumns={"228px 1fr"}>
          <GridItem>
            <ProductsSidebar />
          </GridItem>
          <GridItem>
            <ProductContainer />
          </GridItem>
        </Grid>
      </Flex>
      {/* Mobile View Up and Down */}
      <Flex minW={"full"} display={["flex", "none", "none"]} flexDir="column">
        <ProductsSidebar w="full" />
        <ProductContainer />
      </Flex>
    </Fragment>
  );
}

export default ProductFilterPage;
