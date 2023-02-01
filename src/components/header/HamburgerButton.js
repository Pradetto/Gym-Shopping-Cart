import React from "react";
import { Link as ReachLink } from "react-router-dom";

// CSS
import { Button, Link, Center } from "@chakra-ui/react";

function HamburgerButton(props) {
  const actionHandler = () => {
    if (props.action) {
      props.action();
    }
    props.setNoneDisplayHandler();
  };
  return (
    <Button
      variant="outline"
      aria-label="Home"
      my={3}
      w="100%"
      onClick={actionHandler}
    >
      <Center>
        <Link
          as={ReachLink}
          to={props.to}
          w="full"
          style={{ width: "21rem", textAlign: "center" }}
        >
          {props.text}
          {props.children}
        </Link>
      </Center>
    </Button>
  );
}

export default HamburgerButton;
