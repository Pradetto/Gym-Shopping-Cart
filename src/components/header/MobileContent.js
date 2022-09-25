import React from "react";

// CSS
import { Flex, Icon, HStack, IconButton, Heading } from "@chakra-ui/react";
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
        <Icon as={IoBarbell} size={4} />
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
