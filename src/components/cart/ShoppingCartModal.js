import React, { Fragment } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../../store/cart-slice";

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
                <Fragment>
                  <HStack justifyContent={"space-between"}>
                    <Box>Image</Box>
                    <VStack alignItems={"flex-start"}>
                      <Box>Product Name</Box>
                      <HStack>
                        <Box>$1,999.21</Box>
                        <Box>Q: {cartItem.quantity}</Box>
                      </HStack>
                    </VStack>
                  </HStack>
                  <HStack>
                    <Button
                      onClick={() => dispatch(cartActions.decrementItemByOne)}
                    >
                      -
                    </Button>
                    <Button>+</Button>
                  </HStack>
                </Fragment>
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter gap={2}>
            <VStack w={"full"}>
              <Flex justifyContent={"space-between"} w={"full"}>
                <Box fontWeight={"bold"}>Total Amount:</Box>
                <Box fontWeight={"bold"}>$109.99</Box>
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
