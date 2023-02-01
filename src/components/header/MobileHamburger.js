import React, { Fragment } from "react";

// Components
import HamburgerButton from "./HamburgerButton";

// CSS
import { Flex, IconButton, Divider, HStack, Text, Box } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function MobileHamburger(props) {
  return (
    <Flex
      w="100vw"
      display={props.display}
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
          onClick={props.setNoneDisplayHandler}
        />
      </Flex>

      <Flex flexDir="column" align="center" w="full" p={3}>
        <HamburgerButton
          to="/"
          text="Home"
          setNoneDisplayHandler={props.setNoneDisplayHandler}
        />
        <HamburgerButton
          to="/products"
          text="Products"
          setNoneDisplayHandler={props.setNoneDisplayHandler}
        />
        <HamburgerButton
          to="/contact"
          text="Contact"
          setNoneDisplayHandler={props.setNoneDisplayHandler}
        />

        <Divider backgroundColor={"gray.500"} />
        {!props.isLoggedIn && (
          <HamburgerButton
            text="Sign Up"
            to="/signup"
            setNoneDisplayHandler={props.setNoneDisplayHandler}
          />
        )}
        {props.isLoggedIn ? (
          <Fragment>
            <HamburgerButton
              to="/"
              text="Logout"
              action={props.logoutHandler}
              setNoneDisplayHandler={props.setNoneDisplayHandler}
            />
            <HamburgerButton
              to="/favorites"
              setNoneDisplayHandler={props.setNoneDisplayHandler}
            >
              {props.hasFavorites ? (
                <HStack justifyContent={"center"}>
                  <Box as={AiFillHeart} size={25} color="#e31b23" />
                </HStack>
              ) : (
                <HStack alignItems={"center"} justifyContent={"center"}>
                  <Box as={AiOutlineHeart} size={25} color="#e31b23" />
                </HStack>
              )}
            </HamburgerButton>
          </Fragment>
        ) : (
          <HamburgerButton
            to="/login"
            text="Login"
            action={props.loginHandler}
            setNoneDisplayHandler={props.setNoneDisplayHandler}
          />
        )}
        <HamburgerButton
          setNoneDisplayHandler={props.setNoneDisplayHandler}
          action={props.cartDisplayHandler}
        >
          <HStack justifyContent={"center"}>
            <Text>{props.cartQuantity}</Text>
            <Box as={GiShoppingCart} size={35} />
          </HStack>
        </HamburgerButton>
      </Flex>
    </Flex>
  );
}

export default MobileHamburger;
