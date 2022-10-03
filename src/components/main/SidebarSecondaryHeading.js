import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

// CSS
import { Box, Link } from "@chakra-ui/react";

function SidebarSecondaryHeading(props) {
  return (
    <Link
      as={RouterLink}
      to={props.to}
      _activeLink={{
        fontWeight: "bold",
        textDecoration: "underline",
        transform: "scale(1.15)",
        color: "#DCDCDC",
      }}
      onClick={props.action}
    >
      <Box
        as="li"
        mx={2}
        size="md"
        key={props.id}
        _hover={{
          border: "3px dotted #ff7a59",
          color: "#ff7a59",
          background: "#fff",
        }}
        cursor={"pointer"}
      >
        {props.children}
      </Box>
    </Link>
  );
}

export default SidebarSecondaryHeading;
