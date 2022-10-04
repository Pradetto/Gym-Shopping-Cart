import React, { useState } from "react";

import { Box, Center, Text, Wrap, WrapItem } from "@chakra-ui/react";

function ProductColors(props) {
  const [color, setColor] = useState(null);
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
              border={"1px solid gray"}
              p={1}
              minW={75}
              minH={75}
              cursor="pointer"
            >
              <Center
                w={"full"}
                h={"full"}
                onClick={() => setColor(c)}
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
