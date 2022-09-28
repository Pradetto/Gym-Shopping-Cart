import React from "react";

// CSS
import { Box } from "@chakra-ui/react";

function SidebarSecondaryHeading(props) {
  return (
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
  );
}

export default SidebarSecondaryHeading;
