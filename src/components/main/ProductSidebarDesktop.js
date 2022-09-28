import React, { Fragment } from "react";

// Components
import SidebarPrimaryHeading from "./SidebarPrimaryHeading";

// Dummy Data
import { categoryData, subcategoryData } from "../../store/dummData";
import SidebarSecondaryHeading from "./SidebarSecondaryHeading";

// CSS
import {
  Center,
  Flex,
  Heading,
  UnorderedList,
  ListItem,
  Box,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";

function ProductSidebarDesktop() {
  return (
    <VStack w={"full"}>
      <VStack my={18}>
        <Heading as="h3" size="md" textAlign={"left"} w={"full"}>
          Shop/
        </Heading>
        <Heading as={"h3"} size="lg" textAlign="center" w={"full"}>
          All Products
        </Heading>
      </VStack>

      <UnorderedList w={"100px"} listStyleType="none">
        {categoryData.map((item) => (
          <SidebarPrimaryHeading
            as="li"
            key={item.categoryId}
            textColor="black"
            w={"full"}
            text={item.category}
          >
            <UnorderedList
              key={item.categoryId}
              listStyleType={"none"}
              m={0}
              p={0}
            >
              {item.subcategories.map((item) => (
                <SidebarSecondaryHeading
                  key={item.subcategoryId}
                  id={item.subcategoryId}
                >
                  {item.subcategory}
                </SidebarSecondaryHeading>
              ))}
            </UnorderedList>
          </SidebarPrimaryHeading>
        ))}
        <SidebarPrimaryHeading text="View All"></SidebarPrimaryHeading>
      </UnorderedList>
      {/* <UnorderedList>
            {categoryData.map((item) => (
              <SidebarPrimaryHeading id={Math.random()}>
                {item.category}
                <UnorderedList key={Math.random()}>
                  {item.subcategories.map((item) => (
                    <SidebarSecondaryHeading id={Math.random()}>
                      {item.subcategory}
                    </SidebarSecondaryHeading>
                  ))}
                </UnorderedList>
              </SidebarPrimaryHeading>
            ))}
          </UnorderedList> */}
    </VStack>
  );
}

export default ProductSidebarDesktop;
