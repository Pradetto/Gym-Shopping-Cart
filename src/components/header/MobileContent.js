import React from "react";
import { Link as ReachLink } from "react-router-dom";
// CSS
import { Flex, Box, HStack, IconButton, Heading, Link } from "@chakra-ui/react";
import { IoBarbell } from "react-icons/io5";
import { HamburgerIcon } from "@chakra-ui/icons";

function MobileContent(props) {
  return (
    <Flex
      display={["flex", "flex", "none", "none"]}
      w="100vw"
      justify="space-between"
      p={2}
    >
      <HStack>
        <Link as={ReachLink} to="/">
          <Box as={IoBarbell} size={35} color={"limegreen"} />
        </Link>
        <Heading as="h2">Fitness+</Heading>
      </HStack>
      <IconButton
        aria-label="Open Menu"
        size="lg"
        mr={2}
        icon={<HamburgerIcon />}
        onClick={props.changeDisplay}
        display={["flex", "flex", "none", "none"]}
      />
    </Flex>
  );
}

export default MobileContent;
