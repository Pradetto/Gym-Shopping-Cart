import React, { Fragment } from "react";

// CSS
import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Button,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";

function ProductDescription(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <Button onClick={() => onOpen()}>{`+`}</Button>
      <Drawer onClose={onClose} isOpen={isOpen} size={"xs"} zIndex={1000}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Product Description</DrawerHeader>
          <DrawerBody>
            <Text>
              The {`${props.item.productDetails.productName}`} features a
              lightweight, breathable, perforated polyester ripstop material.
              This unisex {`${props.item.category}`} item is designed to take on
              as much work as you do.
              <UnorderedList>
                <ListItem>
                  The upper of the Ripstop Runner and built-in lateral and
                  medial support provide a secure fit for movement in every
                  direction.
                </ListItem>
                <ListItem>
                  The material was designed for multi-environment usage,
                  allowing for an easy transition between inside and outside
                  with the right blend of flexibility and support.
                </ListItem>
                <ListItem> Breathable perforated material.</ListItem>
                <ListItem>
                  Internal collar padding provides all-day comfort.
                </ListItem>
                <ListItem>
                  Lightweight midsole constructed of high rebound Phylon,
                  providing durability.
                </ListItem>
                <ListItem>Weight: 10.3 oz.</ListItem>
              </UnorderedList>
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}

export default ProductDescription;
