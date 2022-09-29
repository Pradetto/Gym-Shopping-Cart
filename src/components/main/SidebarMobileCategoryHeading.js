import React from "react";

// CSS
import { MenuItem } from "@chakra-ui/react";

function SidebarMobileCategoryHeading(props) {
  return (
    <MenuItem fontWeight={"bold"} key={props.id}>
      {props.children}
    </MenuItem>
  );
}

export default SidebarMobileCategoryHeading;
