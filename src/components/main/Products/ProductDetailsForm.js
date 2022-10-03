import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailsForm() {
  const params = useParams();
  return (
    <Box
      maxW={"75%"}
      minW={"75%"}
      m={5}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box>HELLLOOO</Box>
    </Box>
  );
}

export default ProductDetailsForm;
