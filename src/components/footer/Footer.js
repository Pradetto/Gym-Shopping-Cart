import React from "react";

// CSS
import { Heading, Link, Container, Flex } from "@chakra-ui/react";

function Footer() {
  return (
    <Container position="absolute" bottom="0" h={4} w={"full"}>
      <Flex justifyContent="">
        <Heading as="h6" size="sm" color="white" opacity=".4">
          Copyright &copy; Michael Pradetto
        </Heading>
        <Link>Credits</Link>
      </Flex>
    </Container>
  );
}

export default Footer;
