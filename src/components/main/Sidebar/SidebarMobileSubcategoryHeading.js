import React from "react";
// import { NavLink as RouterLink } from "react-router-dom";

// CSS
import { MenuItem } from "@chakra-ui/react";

function SidebarMobileSubcategoryHeading(props) {
  return <MenuItem>{props.children}</MenuItem>;
}

export default SidebarMobileSubcategoryHeading;
