import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

// CSS

import { Link, Button } from "@chakra-ui/react";

function DesktopButton(props) {
  return (
    <Link
      as={RouterLink}
      to={props.to}
      _activeLink={{
        fontWeight: "bold",
        textDecoration: "underline",
        transform: "scale(1.15)",
      }}
      onClick={props.action}
    >
      <Button as="" variant="ghost" aria-label="Home" my={3} w="100%">
        {props.text}
        {props.children}
      </Button>
    </Link>
  );
}

export default DesktopButton;
