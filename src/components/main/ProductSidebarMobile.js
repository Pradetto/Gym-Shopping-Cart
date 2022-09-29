import React from "react";

// CSS
import { MenuButton, Menu, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

// Dummy Data
import { categoryData, subcategoryData } from "../../store/dummData";
import SidebarMobileCategoryHeading from "./SidebarMobileCategoryHeading";
import SidebarMobileSubcategoryHeading from "./SidebarMobileSubcategoryHeading";

function ProductSidebarMobile() {
  return (
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
        {categoryData.map((item) => (
          <SidebarMobileCategoryHeading
            key={item.categoryId}
            id={item.categoryId}
          >
            {item.category}
          </SidebarMobileCategoryHeading>
        ))}
      </MenuList>
    </Menu>
  );
}

export default ProductSidebarMobile;
