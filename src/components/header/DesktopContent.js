import React, { useState } from "react";
import { Link as ReachLink, NavLink as RouterLink } from "react-router-dom";

// CSS
import {
  Flex,
  Button,
  Link,
  HStack,
  Divider,
  Box,
  Text,
} from "@chakra-ui/react";
import { GiShoppingCart } from "react-icons/gi";

function DesktopContent() {
  return (
    <Flex display={["none", "none", "flex", "flex"]}>
      <HStack>
        <Link
          as={RouterLink}
          to="/home"
          _activeLink={{
            fontWeight: "bold",
            textDecoration: "underline",
            transform: "scale(1.15)",
          }}
        >
          <Button as="" variant="ghost" aria-label="Home" my={3} w="100%">
            Home
          </Button>
        </Link>
        <Link
          as={RouterLink}
          to="/about"
          _activeLink={{
            fontWeight: "bold",
            textDecoration: "underline",
            transform: "scale(1.15)",
          }}
        >
          <Button as="" variant="ghost" aria-label="Home" my={3} w="100%">
            About
          </Button>
        </Link>
        <Link
          as={RouterLink}
          to="/contact"
          _activeLink={{
            fontWeight: "bold",
            textDecoration: "underline",
            transform: "scale(1.15)",
          }}
        >
          <Button as="" variant="ghost" aria-label="Home" my={3} w="100%">
            Contact
          </Button>
        </Link>
      </HStack>
      <Divider orientation="vertical" borderColor={"gray.500"} mx={3} />

      <HStack>
        <Link
          as={RouterLink}
          to="/signup"
          _activeLink={{
            fontWeight: "bold",
            textDecoration: "underline",
            transform: "scale(1.15)",
          }}
        >
          <Button as="" variant="ghost" aria-label="Home" my={3} w="100%">
            Sign Up
          </Button>
        </Link>
        <Link
          as={RouterLink}
          to="/login"
          _activeLink={{
            fontWeight: "bold",
            textDecoration: "underline",
            transform: "scale(1.15)",
          }}
        >
          <Button as="" variant="ghost" aria-label="Home" my={3} w="100%">
            Login
          </Button>
        </Link>
        <Link
          as={RouterLink}
          to="/cart"
          _activeLink={{
            fontWeight: "bold",
            textDecoration: "underline",
            transform: "scale(1.15)",
          }}
        >
          <Button as="" variant="ghost" aria-label="Home" my={3} w="100%">
            <Text>0</Text>
            <Box as={GiShoppingCart} size={35} />
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
}

export default DesktopContent;

// background: "var(--chakra-colors-gray-100)";
