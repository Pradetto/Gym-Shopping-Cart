import React, { Fragment, useState } from "react";

// Components
import DesktopButton from "./DesktopButton";
// CSS
import { Flex, HStack, Divider, Box, Text } from "@chakra-ui/react";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function DesktopContent(props) {
  return (
    <Flex display={["none", "none", "flex", "flex"]}>
      <HStack>
        <DesktopButton text="Home" to="/home" />
        <DesktopButton text="Products" to="/products" />
        <DesktopButton text="Contact" to="/contact" />
      </HStack>
      <Divider orientation="vertical" borderColor={"gray.500"} mx={3} />

      <HStack>
        {/* {isLoggedIn ? (
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        ) : (
          <DesktopButton text="Sign Up" to="/signup" />
        )} */}
        {!props.isLoggedIn && <DesktopButton text="Sign Up" to="/signup" />}
        {props.isLoggedIn ? (
          <Fragment>
            <DesktopButton
              to="/logout"
              text="Logout"
              action={props.logoutHandler}
            />
            <DesktopButton to="/favorites">
              {!props.hasFavorites && (
                <Box
                  as={AiOutlineHeart}
                  size={25}
                  color="#e31b23"
                  onClick={props.isFavoritesHandler}
                />
              )}
              {props.hasFavorites && (
                <Box
                  as={AiFillHeart}
                  size={25}
                  color="#e31b23"
                  onClick={props.isFavoritesHandler}
                />
              )}
            </DesktopButton>
          </Fragment>
        ) : (
          <DesktopButton to="/login" text="Login" action={props.loginHandler} />
        )}
        <DesktopButton to="/cart">
          <Text>0</Text>
          <Box as={GiShoppingCart} size={35} />
        </DesktopButton>
      </HStack>
    </Flex>
  );
}

export default DesktopContent;

// background: "var(--chakra-colors-gray-100)";
