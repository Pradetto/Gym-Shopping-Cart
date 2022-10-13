import React from "react";

//redux
import { useDispatch } from "react-redux";
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
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <HStack>
                <Box>Image</Box>
                <VStack alignItems={"flex-start"}>
                  <Box>Product Name</Box>
                  <HStack>
                    <Box>$1,999.21</Box>
                    <Box>Q: 120</Box>
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
            </Flex>
          </ModalBody>
          <ModalFooter gap={2}>
            <VStack w={"full"}>
              <Flex justifyContent={"space-between"} w={"full"}>
                <Box>Total Amount:</Box>
                <Box>$109.99</Box>
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
