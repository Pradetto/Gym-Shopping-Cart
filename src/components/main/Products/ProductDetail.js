import React, { Fragment, useEffect, useState } from "react";

// Components
import Carousel from "./ProductDetailCarousel";
import ProductDetailsForm from "../ProductDetailForm/ProductDetailsForm";
import ProductDetailModal from "./ProductDetailModal";

//Redux & Router
import { getAllProducts } from "../../../store/products-slice";
import { useParams } from "react-router-dom";

// CSS
import { Grid, GridItem, Center, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function ProductDetail() {
  const [item, setItem] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
    // (
    //   <Center>
    //     <Text color={"red"}>
    //       {" "}
    //       Hmmm loading is taking a little longer than expected. Please wait a
    //       little longer and if nothing loads please return to products page and
    //       try again.
    //     </Text>
    //   </Center>
    // );
  }

  // const showModalhandler = () => {
  //   setShowModal(!showModal);
  // };

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
          <Carousel item={item} />
        </GridItem>
        <GridItem maxW={"50vw"} p={5}>
          <ProductDetailsForm item={item} />
        </GridItem>
        {/* <ProductDetailModal /> */}
      </Grid>

      {/* // Mobile */}
      <Grid
        gridTemplateRows={"1fr 1fr"}
        // minH={"93vh"}
        display={["block", "block", "none"]}
      >
        <GridItem maxW={"100vw"}>
          <Carousel item={item} />
        </GridItem>
        <GridItem maxW={"100vw"} justifyContent={"Center"}>
          <ProductDetailsForm item={item} />
        </GridItem>
      </Grid>
    </Fragment>
  );
}

export default ProductDetail;
