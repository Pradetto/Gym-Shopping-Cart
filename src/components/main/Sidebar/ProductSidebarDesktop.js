import React from "react";
// redux
import { useSelector } from "react-redux";

// Components
import SidebarPrimaryHeading from "./SidebarPrimaryHeading";
import SidebarSecondaryHeading from "./SidebarSecondaryHeading";

// Redux
import { getAllCategories } from "../../../store/products-slice";

// CSS
import { Heading, UnorderedList, VStack, Box, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function ProductSidebarDesktop() {
  const reduxCategory = useSelector(getAllCategories);
  const params = useParams();

  return (
    <VStack w={"256px"} alignItems={"flex-start"}>
      <Flex my={18} alignItems={"flex-start"} flexDir="column">
        <Heading as="h3" size="md" textAlign={"left"} w={"full"}>
          Shop/
        </Heading>
        <Heading
          as={"h3"}
          size="lg"
          textAlign="center"
          w={"full"}
          textTransform={"capitalize"}
        >
          {params.categoryId
            ? params.subcategoryId
              ? params.subcategoryId
              : params.categoryId
            : "All Products"}
        </Heading>
      </Flex>

      <UnorderedList w={"160px"} listStyleType="none">
        {reduxCategory.map((item) => (
          <Box key={item.categoryId}>
            <SidebarPrimaryHeading
              as="li"
              key={item.categoryId}
              textColor="black"
              w={"full"}
              text={item.category}
              to={`/products/${item.category.toLowerCase()}`}
            />
            <UnorderedList
              // key={item.categoryId}
              listStyleType={"none"}
              m={0}
              p={0}
            >
              {item.subcategories.map((subItem) => (
                <SidebarSecondaryHeading
                  key={subItem.subcategoryId}
                  id={subItem.subcategoryId}
                  to={`/products/${item.category.toLowerCase()}/${subItem.subcategory.toLowerCase()}`}
                >
                  {subItem.subcategory}
                </SidebarSecondaryHeading>
              ))}
            </UnorderedList>
          </Box>
        ))}
        <SidebarPrimaryHeading text="View All" to={"/products/"} />
      </UnorderedList>
    </VStack>
  );
}

export default ProductSidebarDesktop;
