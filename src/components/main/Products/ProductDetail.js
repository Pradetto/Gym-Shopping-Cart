import React, { Fragment } from "react";

// Components
import Carousel from "./ProductDetailCarousel";
import ProductDetailsForm from "./ProductDetailsForm";

// CSS
import { Grid, GridItem } from "@chakra-ui/react";

function ProductDetail() {
  return (
    <Fragment>
      {/* // Desktop */}
      <Grid
        gridTemplateColumns={"1fr .85fr"}
        gridTemplateRows={"1fr"}
        minH={"80vh"}
        display={["none", "none", "grid"]}
      >
        <GridItem maxW={"50vw"} p={5} my={5}>
          <Carousel />
        </GridItem>
        <GridItem maxW={"50vw"} p={5}>
          <ProductDetailsForm />
        </GridItem>
      </Grid>

      {/* // Mobile */}
      <Grid
        gridTemplateRows={"1fr 1fr"}
        // minH={"93vh"}
        display={["block", "block", "none"]}
      >
        <GridItem maxW={"100vw"}>
          <Carousel />
        </GridItem>
        <GridItem maxW={"100vw"}>
          <ProductDetailsForm />
        </GridItem>
      </Grid>
    </Fragment>
  );
}

export default ProductDetail;
