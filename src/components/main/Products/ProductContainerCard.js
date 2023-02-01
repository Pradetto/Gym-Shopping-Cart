import React, { Fragment, useState, useEffect } from "react";
import { Link as RouteLink } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../../../store/favorites-slice";

// Router
import { useParams } from "react-router-dom";

import { getAllProducts } from "../../../store/products-slice";

// CSS
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  Icon,
  Link,
  Tooltip,
} from "@chakra-ui/react";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function ProductContainerCard(props) {
  const products = useSelector(getAllProducts);
  const params = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [sortFilter, setSortFilter] = useState({});
  const dispatch = useDispatch();
  const favoritesData = useSelector((state) => state.favorites);

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
      <Flex wrap={"wrap"} ml={6} mt={6}>
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
              w="19rem" // originally was sm
              h={"32rem"} // NEW ADD HAD NO HEIGHT
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
              <Link
                as={RouteLink}
                to={`/products/${item.category}/${item.subcategory}/${item.productDetails.productName}/details`}
              >
                <Image
                  src={item.productDetails.imageOne}
                  alt={`Picture of ${item.productDetails.productName}`}
                  roundedTop="lg"
                  minWidth={"18.9rem"}
                  maxWidth={"18.9rem"}
                  minH={"22rem"}
                  maxH={"22rem"}
                />
              </Link>
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

                  {favoritesData.some((favItem) => {
                    return (
                      favItem.productDetails.productId ===
                      item.productDetails.productId
                    );
                  }) ? (
                    <Tooltip
                      label="Remove from favorites"
                      bg="white"
                      placement={"top"}
                      color={"gray.800"}
                      fontSize={"1.2em"}
                    >
                      <Link
                        display={"flex"}
                        onClick={() =>
                          dispatch(favoritesActions.removefromFavorites(item))
                        }
                      >
                        <Icon
                          as={AiFillHeart}
                          color="#e31b23"
                          h={8}
                          w={8}
                          alignSelf={"center"}
                        />
                      </Link>
                    </Tooltip>
                  ) : (
                    <Tooltip
                      label="Add to favorites"
                      bg="white"
                      placement={"top"}
                      color={"gray.800"}
                      fontSize={"1.2em"}
                    >
                      <Link
                        display={"flex"}
                        onClick={() =>
                          dispatch(favoritesActions.addtoFavorites(item))
                        }
                      >
                        <Icon
                          as={AiOutlineHeart}
                          h={8}
                          w={8}
                          alignSelf={"center"}
                        />
                      </Link>
                    </Tooltip>
                  )}
                </Flex>

                <Flex justifyContent="space-between" alignContent="center">
                  {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
                  <Box fontSize="2xl" color={"gray.800"}>
                    <Box as="span" color={"gray.600"} fontSize="lg">
                      $
                    </Box>
                    {item.productDetails.price.toFixed(2)}
                  </Box>
                  <Link
                    as={RouteLink}
                    to={`/products/${item.category}/${item.subcategory}/${item.productDetails.productName}/details`}
                  >
                    <Box p={1}>See More</Box>
                  </Link>
                </Flex>
              </Box>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Fragment>
  );
}

export default React.memo(ProductContainerCard);
