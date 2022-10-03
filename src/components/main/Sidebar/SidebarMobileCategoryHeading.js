import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

// CSS
import { MenuItem, Link } from "@chakra-ui/react";

function SidebarMobileCategoryHeading(props) {
  return (
    <Link as={RouterLink} to={props.to}>
      <MenuItem fontWeight={"bold"} key={props.id}>
        {props.children}
      </MenuItem>
    </Link>
  );
}

export default SidebarMobileCategoryHeading;
