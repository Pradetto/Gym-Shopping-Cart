import React from "react";

// CSS
import { Box, HStack, Center } from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// Redux
import { favoritesActions } from "../../../store/favorites-slice";
import { useDispatch, useSelector } from "react-redux";

function ProductFormButtons(props) {
  const dispatch = useDispatch();
  const favoritesData = useSelector((state) => state.favorites);
  return (
    <HStack spacing={5}>
      <Box
        as="button"
        color={"white"}
        backgroundColor={"black"}
        w={"80%"}
        h={50}
        fontWeight={"bold"}
        onClick={() => props.addToCartHandler()}
      >
        ADD TO BAG
      </Box>
      <Box as="button" border={"2px solid black"} h={50} w={50}>
        <Center>
          {favoritesData.some((favItem) => {
            return (
              props.item.productDetails.productId ===
              favItem.productDetails.productId
            );
          }) ? (
            <Box
              as={AiFillHeart}
              color="#e31b23"
              size={25}
              onClick={() =>
                dispatch(favoritesActions.removefromFavorites(props.item))
              }
            />
          ) : (
            <Box
              as={AiOutlineHeart}
              size={25}
              onClick={() =>
                dispatch(favoritesActions.addtoFavorites(props.item))
              }
            />
          )}
        </Center>
      </Box>
    </HStack>
  );
}

export default ProductFormButtons;
