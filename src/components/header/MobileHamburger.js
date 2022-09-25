import React, { useState } from "react";
import { Link as ReachLink, NavLink } from "react-router-dom";

// CSS
import {
  Flex,
  Button,
  IconButton,
  Link,
  HStack,
  Heading,
  Icon,
  Divider,
} from "@chakra-ui/react";

function MobileHamburger() {
  return (
    <Button
      as=""
      variant="outline"
      aria-label="Contact"
      my={3}
      w="100%"
      onClick={() => changeDisplay("none")}
    >
      <Link
        as={ReachLink}
        to="/contact"
        style={{ width: "100%", textAlign: "center" }}
      >
        Contact
      </Link>
    </Button>
  );
}

export default MobileHamburger;
