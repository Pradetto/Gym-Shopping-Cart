import React from "react";

// Router
import { useParams } from "react-router-dom";

// CSS
import { Box } from "@chakra-ui/react";

function Mapping() {
  const params = useParams();
  return <Box>{`/ ${params.categoryId} / ${params.subcategoryId}`}</Box>;
}

export default Mapping;
