import { Flex, Box } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Flex justifyContent="space-between" w="100vw" bgColor="gray.300" p="5">
      <Box>Detto's Gym</Box>
      <Box>Home Products Contact Credits</Box>
      <Box>Sign Up Log In Cart</Box>
    </Flex>
  );
}

export default Header;
