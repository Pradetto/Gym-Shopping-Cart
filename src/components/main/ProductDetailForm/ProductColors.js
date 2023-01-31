import React from "react";

import { Box, Center, Text, Wrap, WrapItem } from "@chakra-ui/react";

function ProductColors(props) {
  const { color, colorHandler } = props;

  const colors = [
    "pink",
    "red",
    "maroon",
    "white",
    "lightblue",
    "orange",
    "black",
    "lightgrey",
    "aquamarine",
    "blueviolet",
    "greenyellow",
    "lightsalmon",
  ];
  return (
    <Box my={5}>
      <Text fontSize={"xs"}>
        {color ? `COLOR: ${color.toUpperCase()}` : ` SELECT A COLOR`}
      </Text>
      <Box>
        <Wrap>
          {colors.map((c) => (
            <WrapItem
              border={"1px solid #EEEEEE"}
              p={1}
              minW={65}
              minH={65}
              cursor="pointer"
              key={c}
              _hover={{
                border: "1px solid black",
              }}
            >
              <Center
                w={"full"}
                h={"full"}
                onClick={() => colorHandler(c)}
                backgroundColor={c}
              ></Center>
            </WrapItem>
          ))}
        </Wrap>
        <Text fontSize={"xs"}>This item is unisex.</Text>
      </Box>
    </Box>
  );
}

export default ProductColors;
