import React, { Fragment } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import {
  HStack,
  Box,
  VStack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  ModalCloseButton,
  Modal,
  Flex,
  Center,
} from "@chakra-ui/react";

function ShoppingCartModal(props) {
  const dispatch = useDispatch();
  const btnRef = React.useRef(null);
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  // const totalAmount = useSelector((state) => state.cart.tota)

  return (
    <>
      <Modal
        onClose={props.onClose}
        finalFocusRef={btnRef}
        isOpen={props.isOpen}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shopping Cart:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              alignItems={"space-between"}
              justifyContent={"center"}
              borderBottom={"2px solid #8a2b06"}
              padding={2}
              borderRadius={2}
              flexDir={"column"}
            >
              {items.map((cartItem) => (
                <Fragment
                  key={
                    cartItem.item.productDetails.productName.toString() +
                    cartItem.size.toString() +
                    cartItem.color.toString()
                  }
                >
                  <HStack justifyContent={"space-between"}>
                    <Box>Image</Box>
                    <VStack alignItems={"flex-start"}>
                      <Box>{cartItem.item.productDetails.productName}</Box>
                      <HStack>
                        <Box>
                          $
                          {Math.round(
                            cartItem.item.productDetails.price *
                              cartItem.quantity,
                            2
                          )}
                        </Box>
                        <Box>Q: {cartItem.quantity}</Box>
                        <Box>{cartItem.color.toUpperCase()}</Box>
                        <Box>{cartItem.size}</Box>
                      </HStack>
                    </VStack>
                  </HStack>
                  <HStack>
                    <Button
                      onClick={() =>
                        dispatch(
                          cartActions.decrementItemByOne({
                            index: cartItem.index,
                          })
                        )
                      }
                    >
                      -
                    </Button>
                    <Button
                      onClick={() =>
                        dispatch(
                          cartActions.incrementItemByOne({
                            index: cartItem.index,
                          })
                        )
                      }
                    >
                      +
                    </Button>
                  </HStack>
                </Fragment>
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter gap={2}>
            <VStack w={"full"}>
              <Flex justifyContent={"space-between"} w={"full"}>
                <Box fontWeight={"bold"}>Total Amount:</Box>
                <Box fontWeight={"bold"}>${totalAmount.toFixed(2)}</Box>
              </Flex>
              <HStack w={"full"} justifyContent={"flex-end"}>
                <Button onClick={props.onClose}>Close</Button>
                <Button>Checkout</Button>
              </HStack>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ShoppingCartModal;

//  onClick={() =>
//                         dispatch(
//                           cartActions.decrementItemByOne({
//                             index: cartItem.index,
//                           })
//                         )
//                       }
