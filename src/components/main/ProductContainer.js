import React from "react";

// CSS
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

// Dummy Data
import { subcategoryData } from "../../store/dummData";

function ProductContainer() {
  return (
    <Flex wrap={"wrap"}>
      {subcategoryData.map((item) => (
        <Flex
          p={4}
          alignItems="center"
          justifyContent="center"
          key={item.productDetails.productId}
        >
          {/* w='full' I removed this */}
          <Box
            bg={"white"}
            maxW="22rem" // originally was sm
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
          >
            {item.productDetails.newAdd && (
              <Circle
                size="10px"
                position="absolute"
                top={2}
                right={2}
                bg="red.200"
              />
            )}

            <Image
              src={item.productDetails.imageOne}
              alt={`Picture of ${item.productDetails.productName}`}
              roundedTop="lg"
            />

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                {item.productDetails.newAdd && (
                  <Badge
                    rounded="full"
                    px="2"
                    fontSize="0.8em"
                    colorScheme="red"
                  >
                    New
                  </Badge>
                )}
                {!item.productDetails.newAdd && (
                  <Badge
                    rounded="full"
                    px="2"
                    fontSize="0.8em"
                    colorScheme="red"
                  ></Badge>
                )}
              </Box>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  //   isTruncated
                >
                  {item.productDetails.productName}
                </Box>
                <Tooltip
                  label="Add to cart"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={"1.2em"}
                >
                  {/* Will have to update HEEEEEEERRRRREEEEEEEEEEEEEEEEE */}
                  <chakra.a href={"#"} display={"flex"}>
                    <Icon
                      as={FiShoppingCart}
                      h={7}
                      w={7}
                      alignSelf={"center"}
                    />
                  </chakra.a>
                </Tooltip>
              </Flex>

              <Flex justifyContent="space-between" alignContent="center">
                {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
                <Box fontSize="2xl" color={"gray.800"}>
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    $
                  </Box>
                  {item.productDetails.price.toFixed(2)}
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
}

export default ProductContainer;