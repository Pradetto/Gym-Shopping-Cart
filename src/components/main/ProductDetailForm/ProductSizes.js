import React, { useState } from "react";

import { Box, Center, Text, Wrap, WrapItem } from "@chakra-ui/react";

function ProductSizes(props) {
  const [size, setSize] = useState(null);
  const apparelSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  return (
    <Box my={5}>
      <Text fontSize={"xs"}>
        {size ? `US SIZE: ${size}` : ` SELECT A SIZE`}
      </Text>
      <Box>
        <Wrap>
          {apparelSizes.map((s) => (
            <WrapItem
              border={"1px solid gray"}
              p={1}
              minW={75}
              minH={75}
              cursor="pointer"
            >
              <Center w={"full"} h={"full"} onClick={() => setSize(s)}>
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
