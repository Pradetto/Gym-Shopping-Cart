import React, { Fragment, useEffect, useState } from "react";

// Components
import ProductDetailCarousel from "./ProductDetailCarousel";
import ProductDetailsForm from "../ProductDetailForm/ProductDetailsForm";

//Redux & Router
import { getAllProducts } from "../../../store/products-slice";
import { useParams } from "react-router-dom";

// CSS
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function ProductDetail() {
  const [item, setItem] = useState(false);
  const productsData = useSelector(getAllProducts);
  const params = useParams();

  useEffect(() => {
    const product = productsData.filter((items) => {
      return items.productDetails.productName === params.productId;
    });
    setItem(product[0]);
  }, [params, productsData]);

  // ERROR HANDLER if starting undefined double rendering here
  if (!item) {
    return;
    // <Center>
    //   <Text color={"red"}>
    //     {" "}
    //     Hmmm loading is taking a little longer than expected. Please wait a
    //     little longer and if nothing loads please return to products page and
    //     try again.
    //   </Text>
    // </Center>;
  }

  return (
    <Fragment>
      {/* // Desktop */}
      <Grid
        gridTemplateColumns={"1fr .85fr"}
        gridTemplateRows={"1fr"}
        minH={"80vh"}
        display={["none", "none", "grid"]}
        gridAutoFlow={"row"}
      >
        <GridItem maxW={"50vw"} p={5} my={5} marginLeft={"15%"}>
          <ProductDetailCarousel item={item} />
        </GridItem>
        <GridItem maxW={"50vw"} p={5} mx={15}>
          <ProductDetailsForm item={item} />
        </GridItem>
      </Grid>

      {/* // Mobile */}
      <Grid
        gridTemplateRows={"1fr 1fr"}
        // minH={"93vh"}
        display={["block", "block", "none"]}
      >
        <GridItem maxW={"100vw"}>
          <ProductDetailCarousel item={item} />
        </GridItem>
        <GridItem maxW={"100vw"} justifyContent={"Center"}>
          <ProductDetailsForm item={item} />
        </GridItem>
      </Grid>
    </Fragment>
  );
}

export default ProductDetail;
