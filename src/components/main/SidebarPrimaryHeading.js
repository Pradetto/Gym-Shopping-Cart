import React from "react";

//CSS
import { Heading, ListItem, Text, Box } from "@chakra-ui/react";

function SidebarPrimaryHeading(props) {
  return (
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
  );
}

export default SidebarPrimaryHeading;
