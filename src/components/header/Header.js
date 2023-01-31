import React, { useState } from "react";
import { Link as ReachLink } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

// Components
import MobileContent from "./MobileContent";
import DesktopContent from "./DesktopContent";
import MobileHamburger from "./MobileHamburger";

// CSS
import { Flex, Link, Heading, Box } from "@chakra-ui/react";
import { IoBarbell } from "react-icons/io5";

export const Header = (props) => {
  const [display, setChangeDisplay] = useState("none");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Need to update
  const cartQuantity = useSelector((state) =>
    state.cart.items.length > 0
      ? state.cart.items.reduce((total, obj) => total + obj.quantity, 0)
      : 0
  );
  const hasFavorites = useSelector((state) => state.favorites.length);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const setFlexDisplayHandler = () => {
    setChangeDisplay("flex");
  };

  const setNoneDisplayHandler = () => {
    setChangeDisplay("none");
  };

  return (
    <Flex
      align="center"
      backgroundColor="gray.300"
      w="full"
      p={2}
      zIndex={100}
      position="fixed"
      boxShadow={"xl"}
    >
      <Flex justifyContent="space-between" w={"full"} px={2}>
        <Flex
          display={["none", "none", "flex", "flex"]}
          justifyContent="center"
          alignItems="center"
        >
          <Link as={ReachLink} to="/">
            <Box as={IoBarbell} size={35} color={"limegreen"} />
          </Link>
          <Heading>Fitness+</Heading>
        </Flex>
        <DesktopContent
          loginHandler={loginHandler}
          logoutHandler={logoutHandler}
          isLoggedIn={isLoggedIn}
          hasFavorites={hasFavorites}
          cartDisplay={props.cartDisplay}
          cartDisplayHandler={props.cartDisplayHandler}
          cartNotDisplayHandler={props.cartNotDisplayHandler}
          cartQuantity={cartQuantity}
        />
        <MobileContent changeDisplay={setFlexDisplayHandler} />
      </Flex>

      {/* Mobile Content */}
      <MobileHamburger
        display={display}
        setNoneDisplayHandler={setNoneDisplayHandler}
        loginHandler={loginHandler}
        logoutHandler={logoutHandler}
        isLoggedIn={isLoggedIn}
        hasFavorites={hasFavorites}
        cartDisplay={props.cartDisplay}
        cartDisplayHandler={props.cartDisplayHandler}
        cartNotDisplayHandler={props.cartNotDisplayHandler}
        cartQuantity={cartQuantity}
      />
    </Flex>
  );
};

export default Header;
