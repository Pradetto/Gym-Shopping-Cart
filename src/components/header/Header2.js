import React, { useState } from "react";
import { Link as ReachLink, NavLink } from "react-router-dom";

// CSS
import {
  Flex,
  Button,
  IconButton,
  Link,
  HStack,
  Heading,
  Icon,
  Divider,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IoBarbell } from "react-icons/io5";

import MobileContent from "./MobileContent";
import DesktopContent from "./DesktopContent";

export const Header2 = () => {
  const [display, setChangeDisplay] = useState("none");

  const setFlexDisplayHandler = () => {
    setChangeDisplay("flex");
  };

  const setNoneDisplayHandler = () => {
    setChangeDisplay("none");
  };

  return (
    <Flex
      //   position="fixed"
      align="center"
      backgroundColor="gray.300"
      w="full"
      p={2}
    >
      <Flex justifyContent="space-between" w={"full"} px={2}>
        <Flex
          display={["none", "none", "flex", "flex"]}
          justifyContent="center"
          alignItems="center"
        >
          <Box as={IoBarbell} size={35} color={"limegreen"} />
          <Heading>Fitness+</Heading>
        </Flex>
        <DesktopContent />
        <MobileContent changeDisplay={setFlexDisplayHandler} />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => setChangeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center" w="full" p={3}>
          <Button
            as=""
            variant="outline"
            aria-label="Home"
            my={3}
            w="100%"
            onClick={() => setChangeDisplay("none")}
          >
            <Link
              as={ReachLink}
              to="/"
              w="full"
              style={{ width: "100%", textAlign: "center" }}
            >
              Home
            </Link>
          </Button>

          <Button
            as=""
            variant="outline"
            aria-label="About"
            my={3}
            w="100%"
            onClick={() => setChangeDisplay("none")}
          >
            <Link
              as={ReachLink}
              to="/about"
              style={{ width: "100%", textAlign: "center" }}
            >
              About
            </Link>
          </Button>

          <Button
            as=""
            variant="outline"
            aria-label="Contact"
            my={3}
            w="100%"
            onClick={() => setChangeDisplay("none")}
          >
            <Link
              as={ReachLink}
              to="/contact"
              style={{ width: "100%", textAlign: "center" }}
            >
              Contact
            </Link>
          </Button>

          <Divider backgroundColor={"gray.500"} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header2;
