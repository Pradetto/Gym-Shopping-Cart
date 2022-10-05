import React, { Fragment } from "react";

//Components
import ProductsSidebar from "../components/main/Sidebar/ProductsSidebar";
import ProductContainer from "../components/main/Products/ProductContainer";

// CSS
import { Flex, Grid, GridItem } from "@chakra-ui/react";

function ProductFilterPage() {
  return (
    <Fragment>
      {/* Desktop View side-by-side */}
      <Flex display={["none", "flex", "flex"]}>
        <Grid gridTemplateColumns={"268px 1fr"} gridTemplateRows={"1fr"}>
          <GridItem
            backgroundColor={"#F8F8F8"}
            minH={"100vh"}
            boxShadow={"dark-lg"}
          >
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
