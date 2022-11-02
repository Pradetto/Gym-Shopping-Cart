import React, { useState } from "react";

import { Box, Center, Text, Wrap, WrapItem } from "@chakra-ui/react";

function ProductSizes(props) {
  const { size, sizeHandler } = props;
  const apparelSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const shoeSizes = [
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
    "12.5",
    "13",
  ];
  return (
    <Box my={5}>
      <Text fontSize={"xs"}>
        {size ? `US SIZE: ${size}` : ` SELECT A SIZE`}
      </Text>
      <Box>
        <Wrap>
          {(props.item.category.toLowerCase() === "apparel" ||
            props.item.category.toLowerCase() === "gear") &&
            apparelSizes.map((s) => (
              <WrapItem
                border={"1px solid #EEEEEE"}
                p={1}
                minW={65}
                minH={65}
                cursor="pointer"
                key={s}
                _hover={{
                  border: "1px solid black",
                }}
              >
                <Center w={"full"} h={"full"} onClick={() => sizeHandler(s)}>
                  {s}
                </Center>
              </WrapItem>
            ))}
          {props.item.category.toLowerCase() === "footwear" &&
            shoeSizes.map((s) => (
              <WrapItem
                border={"1px solid #EEEEEE"}
                p={1}
                minW={75}
                minH={75}
                cursor="pointer"
                key={s}
                _hover={{
                  border: "1px solid black",
                }}
              >
                <Center w={"full"} h={"full"} onClick={() => sizeHandler(s)}>
                  {s}
                </Center>
              </WrapItem>
            ))}
        </Wrap>
        <Text fontSize={"xs"}>This item is unisex.</Text>
      </Box>
    </Box>
  );
}

export default ProductSizes;
