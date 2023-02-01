import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

// Components
import SidebarMobileCategoryHeading from "./SidebarMobileCategoryHeading";
// import SidebarMobileSubcategoryHeading from "./SidebarMobileSubcategoryHeading";

//Redux
import { useSelector } from "react-redux";

// CSS
import {
  MenuButton,
  Menu,
  MenuList,
  Button,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

// Data
import { getAllCategories } from "../../../store/products-slice";

function ProductSidebarMobile() {
  const reduxCategory = useSelector(getAllCategories);

  // DOES NOT INCLUDE SUBCATEGORIES
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
        {reduxCategory.map((item) => (
          <SidebarMobileCategoryHeading
            key={item.categoryId}
            id={item.categoryId}
            to={`/products/${item.category.toLowerCase()}`}
          >
            {item.category}
          </SidebarMobileCategoryHeading>
        ))}
        <Link to="/products" as={RouterLink}>
          <MenuItem fontWeight={"bold"}>View All</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}

export default ProductSidebarMobile;
