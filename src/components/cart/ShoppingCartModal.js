import React, { Fragment } from "react";

//React Router
import { Link as Router } from "react-router-dom";

//Redux
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
  Image,
} from "@chakra-ui/react";

//Global variable
const imageSize = "8rem";

function ShoppingCartModal(props) {
  const dispatch = useDispatch();
  const btnRef = React.useRef(null);
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const subtotal = +(Math.round(totalAmount + "e+2") + "e-2");
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
              gap={5}
            >
              {items.length === 0 && <Box>No items in cart</Box>}
              {items.map((cartItem) => (
                <Fragment
                  key={
                    cartItem.item.productDetails.productName.toString() +
                    cartItem.size.toString() +
                    cartItem.color.toString()
                  }
                >
                  <HStack justifyContent={"flex-start"} minH={imageSize}>
                    <Box
                      maxW={imageSize}
                      maxH={imageSize}
                      minH={imageSize}
                      minW={imageSize}
                      as={"img"}
                      src={cartItem.item.productDetails.imageOne}
                    ></Box>
                    <VStack alignItems={"flex-start"} minH={imageSize}>
                      <Box fontWeight={"500"}>
                        {cartItem.item.productDetails.productName}
                      </Box>
                      <HStack fontSize={"sm"}>
                        <Box>Q: {cartItem.quantity}</Box>
                        <Box>Size: {cartItem.size}</Box>
                      </HStack>
                      <Box fontSize={"sm"}>
                        Color: {cartItem.color.toUpperCase()}
                      </Box>

                      <HStack>
                        <HStack>
                          <Button
                            size={"sm"}
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
                            size={"sm"}
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
                        <Box fontWeight={"500"}>
                          $
                          {
                            +(
                              Math.round(
                                cartItem.item.productDetails.price *
                                  cartItem.quantity +
                                  "e+2"
                              ) + "e-2"
                            )
                          }
                        </Box>
                      </HStack>
                    </VStack>
                  </HStack>
                </Fragment>
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter gap={2}>
            <VStack w={"full"}>
              <Flex justifyContent={"space-between"} w={"full"}>
                <Box fontWeight={"bold"}>Total Amount:</Box>
                <Box fontWeight={"bold"}>${subtotal.toFixed(2)}</Box>
              </Flex>
              <HStack w={"full"} justifyContent={"flex-end"}>
                <Button onClick={props.onClose}>Close</Button>
                <Button as={Router} to={"/checkout"} onClick={props.onClose}>
                  Checkout
                </Button>
              </HStack>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ShoppingCartModal;
