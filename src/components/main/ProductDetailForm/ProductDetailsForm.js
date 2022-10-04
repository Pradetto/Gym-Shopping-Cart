import React from "react";

// Components
import Mapping from "./Mapping";
import ProductNamePrice from "./ProductNamePrice";
import ProductSizes from "./ProductSizes";
import ProductFormButtons from "./ProductFormButtons";

// CSS
import { Box } from "@chakra-ui/react";
import ProductColors from "./ProductColors";
import ProductDescription from "./ProductDescription";

function ProductDetailsForm(props) {
  return (
    <Box
      maxW={"75%"}
      minW={"75%"}
      m={5}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Mapping />
      <ProductNamePrice item={props.item} />
      <ProductColors item={props.item} />
      <ProductSizes item={props.item} />
      <ProductFormButtons />
    </Box>
  );
}

export default ProductDetailsForm;
