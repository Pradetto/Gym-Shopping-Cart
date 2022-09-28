import React, { Fragment } from "react";

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

const dummyData = [
  //   { "All Products": ["Apparel", "Footwear", "Gear"] },
  {
    Subcategory: { Apparel: ["Shirts", "Pants"] },
  },
  //   { Footwear: ["Trainers", "Running"] },
  //   { Gear: ["Belts"] },
];

function ProductsSidebar() {
  // How to get the currently selected? Maybe the URL???
  return (
    <Fragment>
      {/* Desktop */}
      <Center w={"full"}>
        <Flex
          w={"full"}
          display={["none", "flex", "flex"]}
          h="full"
          position={"fixed"}
          my={4}
          flexDir="column"
        >
          {/* Need to build out the filter below with maybe the catalog id? */}
          <Heading
            textAlign="center"
            as="h3"
            size="lg"
            noOfLines={1}
            textColor="black"
            _hover={{
              transition: "all 1.65s ease",
              backgroundImage:
                "linear-gradient(to left, violet, indigo, blue, green, #d2d20f, #eb9c0b, red)",
              backgroundClip: "text",
              textFillColor: "tansparent",
            }}
          >
            Filters: All Products
          </Heading>
          {/* {dummyData.map((item) => (
            <Heading
              textAlign="center"
              as="h3"
              size="lg"
              noOfLines={1}
              textColor="black"
              _hover={{
                transition: "all 1.65s ease",
                backgroundImage:
                  "linear-gradient(to left, violet, indigo, blue, green, #d2d20f, #eb9c0b, red)",
                backgroundClip: "text",
                textFillColor: "tansparent",
              }}
            >
              {item.Subcategory}
              <Heading
                textAlign="center"
                as="h5"
                size="md"
                noOfLines={1}
                textColor="black"
                _hover={{
                  transition: "all 1.65s ease",
                  backgroundImage:
                    "linear-gradient(to left, violet, indigo, blue, green, #d2d20f, #eb9c0b, red)",
                  backgroundClip: "text",
                  textFillColor: "tansparent",
                }}
              >
                Shirts
              </Heading>
            </Heading>
          ))} */}
        </Flex>
      </Center>

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
