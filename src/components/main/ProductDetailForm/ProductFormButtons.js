import React from "react";

// CSS
import { Box, HStack, Center } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";

// Redux
import { cartActions } from "../../../store/cart-slice";
import { useDispatch } from "react-redux";

function ProductFormButtons(props) {
  const dispatch = useDispatch();
  // const cartHandler = () => {
  //   dispatch(cart.addToCart(props.item));
  // };
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
          <Box as={AiOutlineHeart} size={25} />
        </Center>
      </Box>
    </HStack>
  );
}

export default ProductFormButtons;
