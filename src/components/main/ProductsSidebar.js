import React, { Fragment } from "react";

// Components
import ProductSidebarDesktop from "./ProductSidebarDesktop";

// CSS
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Center,
  Heading,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import {
  categoriesData as dummyData,
  categoryData,
  subcategoryData,
} from "../../store/dummData";
console.log(dummyData);

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
        <Menu w={"full"}>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            w={"50%"}
            colorScheme="blue"
          >
            Options
          </MenuButton>
          <MenuList w={"100%"}>
            <MenuItem fontWeight={"bold"}>Apparel</MenuItem>
            <MenuItem>Shirts</MenuItem>
            <MenuItem>Pants</MenuItem>
            <MenuItem fontWeight={"bold"}>Footwear</MenuItem>
            <MenuItem>Trainers</MenuItem>
            <MenuItem>Running</MenuItem>
            <MenuItem fontWeight={"bold"}>Equipments</MenuItem>
            <MenuItem>Belts</MenuItem>
            <MenuItem fontWeight={"bold"}>All Products</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Fragment>
  );
}

export default ProductsSidebar;
