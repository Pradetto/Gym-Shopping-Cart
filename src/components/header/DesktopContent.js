import React, { Fragment } from "react";

// Components
import DesktopButton from "./DesktopButton";
// CSS
import { Flex, HStack, Divider, Box, Text } from "@chakra-ui/react";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function DesktopContent(props) {
  return (
    <Fragment>
      <Flex display={["none", "none", "flex", "flex"]}>
        <HStack>
          <DesktopButton text="Home" to="/home" />
          <DesktopButton text="Products" to="/products" />
          <DesktopButton text="Contact" to="/contact" />
        </HStack>
        <Divider orientation="vertical" borderColor={"gray.500"} mx={3} />

        <HStack>
          {!props.isLoggedIn && <DesktopButton text="Sign Up" to="/signup" />}
          {props.isLoggedIn ? (
            <Fragment>
              <DesktopButton
                to="/"
                text="Logout"
                action={props.logoutHandler}
              />
              <DesktopButton to="/favorites">
                {props.hasFavorites ? (
                  <Box as={AiFillHeart} size={25} color="#e31b23" />
                ) : (
                  <Box as={AiOutlineHeart} size={25} color="#e31b23" />
                )}
              </DesktopButton>
            </Fragment>
          ) : (
            <DesktopButton
              to="/login"
              text="Login"
              action={props.loginHandler}
            />
          )}
          <DesktopButton action={props.cartDisplayHandler}>
            <Box as={GiShoppingCart} size={35} />
            <Text>{props.cartQuantity}</Text>
          </DesktopButton>
        </HStack>
      </Flex>
    </Fragment>
  );
}

export default DesktopContent;
