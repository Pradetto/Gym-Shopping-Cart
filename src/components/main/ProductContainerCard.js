import React, { Fragment, useState, useEffect } from "react";

// Redux
import { useSelector } from "react-redux";

// Router
import { useParams } from "react-router-dom";

import {
  fetchProducts,
  getAllCategories,
  getAllProducts,
  getProductsStatus,
  productsActions,
  selectAllCategories,
} from "../../store/products-slice";

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

function ProductContainerCard(props) {
  const products = useSelector(getAllProducts);
  const params = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [sortFilter, setSortFilter] = useState({});

  useEffect(() => {
    const data = products.filter((item) => {
      if (sortFilter.scenario === 2) {
        return item.category.toLowerCase() === sortFilter.categoryId;
      } else if (sortFilter.scenario === 3) {
        return (
          String(item.subcategory.toLowerCase()) === sortFilter.subcategoryId
        );
      } else {
        return products;
      }
    });
    setFilteredData(data);
  }, [sortFilter, products]);

  // Getting filters I can remove the productId filter
  useEffect(() => {
    if (params.productId) {
      setSortFilter({
        scenario: 4,
        subcategoryId: params.subcategoryId,
        productId: params.productId,
        categoryId: params.categoryId,
        allProducts: false,
      });
    } else if (params.subcategoryId && params.categoryId) {
      setSortFilter({
        scenario: 3,
        subcategoryId: params.subcategoryId,
        productId: null,
        categoryId: params.categoryId,
        allProducts: false,
      });
    } else if (params.categoryId) {
      setSortFilter({
        scenario: 2,
        productId: null,
        categoryId: params.categoryId,
        allProducts: false,
        subcategoryId: null,
      });
    } else {
      setSortFilter({
        scenario: 1,
        subcategoryId: null,
        productId: null,
        categoryId: null,
        allProducts: true,
      });
    }
  }, [params]);

  return (
    <Fragment>
      <Flex wrap={"wrap"}>
        {filteredData.map((item) => (
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
                w={"full"}
                maxH={"22rem"}
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
                  {item.productDetails.newAdd && (
                    <Badge
                      rounded="full"
                      px="2"
                      fontSize="0.8em"
                      colorScheme="red"
                    ></Badge>
                  )}
                </Box>
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
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
                  <Box>Details</Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Fragment>
  );
}

export default ProductContainerCard;
