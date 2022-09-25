import React, { Fragment, useState } from "react";
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
  Avatar,
} from "@chakra-ui/react";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function DesktopContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Need to update
  const [hasFavorites, setHasFavorites] = useState(false);
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
          <Button as="" variant="ghost" aria-label="Products" my={3} w="100%">
            Products
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
        {isLoggedIn ? (
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        ) : (
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
        )}
        {isLoggedIn ? (
          <Fragment>
            <Link
              as={RouterLink}
              to="/Logout"
              _activeLink={{
                fontWeight: "bold",
                textDecoration: "underline",
                transform: "scale(1.15)",
              }}
              onClick={() => setIsLoggedIn(false)}
            >
              <Button as="" variant="ghost" aria-label="Home" my={3} w="100%">
                Logout
              </Button>
            </Link>
            <Link
              as={RouterLink}
              to="/favorites"
              _activeLink={{
                fontWeight: "bold",
                textDecoration: "underline",
                transform: "scale(1.15)",
              }}
            >
              <Button as="" variant="ghost" aria-label="Home" my={3} w="100%">
                {!hasFavorites && (
                  <Box as={AiOutlineHeart} size={25} color="#e31b23" />
                )}
                {hasFavorites && (
                  <Box as={AiFillHeart} size={25} color="#e31b23" />
                )}
              </Button>
            </Link>
          </Fragment>
        ) : (
          <Link
            as={RouterLink}
            to="/login"
            _activeLink={{
              fontWeight: "bold",
              textDecoration: "underline",
              transform: "scale(1.15)",
            }}
            onClick={() => setIsLoggedIn(true)}
          >
            <Button as="" variant="ghost" aria-label="Home" my={3} w="100%">
              Login
            </Button>
          </Link>
        )}
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
