import React from "react";

// Components
import ProductDescription from "./ProductDescription";

// CSS
import { Box, Text, Link, Flex } from "@chakra-ui/react";

const classes = {
  fontSize: "2xl",
  fontWeight: "bold",
};
function ProductNamePrice(props) {
  return (
    <Box>
      <Flex justify={"space-between"} align={"flex-start"}>
        <Flex w={"80%"} justify={"flex-start"} flexDir={"Column"}>
          <Text {...classes}>{props.item.productDetails.productName}</Text>
          <Text {...classes}>${props.item.productDetails.price}</Text>
          <Text>
            Or 4 payments of ${(props.item.productDetails.price / 4).toFixed(2)}{" "}
            USD with <Link fontWeight={"bold"}>Klarna</Link>
          </Text>
        </Flex>
        <ProductDescription item={props.item} />
      </Flex>
    </Box>
  );
}

export default ProductNamePrice;
