import React from "react";

// Components
import CheckoutCart from "../components/checkoutForm/CheckoutCart";
import CheckoutDetails from "../components/checkoutForm/CheckoutDetails";

// CSS
import { HStack, VStack } from "@chakra-ui/react";

function CheckoutPage() {
  return (
    <>
      <HStack display={["none", "none", "flex"]}>
        <CheckoutDetails />
        <CheckoutCart />
      </HStack>
      <VStack display={["flex", "flex", "none"]}>
        <CheckoutDetails />
        <CheckoutCart />
      </VStack>
    </>
  );
}

export default CheckoutPage;
