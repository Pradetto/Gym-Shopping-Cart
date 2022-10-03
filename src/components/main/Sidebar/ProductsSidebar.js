import React, { Fragment } from "react";

// Components
import ProductSidebarDesktop from "./ProductSidebarDesktop";
import ProductSidebarMobile from "./ProductSidebarMobile";

// CSS
import { Flex } from "@chakra-ui/react";

function ProductsSidebar() {
  // How to get the currently selected? Maybe the URL???

  return (
    <Fragment>
      {/* Desktop */}
      <Flex
        display={["none", "flex", "flex"]}
        h="full"
        position={"fixed"}
        my={"7rem"}
        mx={"2rem"}
        alignItems="center"
        flexDir="column"
      >
        <ProductSidebarDesktop />
      </Flex>

      {/* {Mobile} */}
      <Flex
        display={["flex", "none", "none"]}
        w="full"
        justifyContent={"center"}
      >
        <ProductSidebarMobile />
      </Flex>
    </Fragment>
  );
}

export default ProductsSidebar;
