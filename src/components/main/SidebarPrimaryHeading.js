import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

//CSS
import { Link, Box } from "@chakra-ui/react";

function SidebarPrimaryHeading(props) {
  return (
    <Link as={RouterLink} to={props.to} onClick={props.action}>
      <Box
        as="li"
        fontSize={"1.2rem"}
        textColor="black"
        key={props.id}
        fontWeight={"extrabold"}
      >
        {props.text}
        <Box fontWeight={"normal"}>{props.children}</Box>
      </Box>
    </Link>
  );
}

export default SidebarPrimaryHeading;

// _activeLink={{
//   fontWeight: "bold",
//   textDecoration: "underline",
//   transform: "scale(1.15)",
//   color: "#DCDCDC",
// }}
