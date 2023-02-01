// Redux
import { useSelector } from "react-redux";

// React-Dom
import { Link as RouterLink } from "react-router-dom";

// CSS
import {
  Heading,
  HStack,
  VStack,
  Image,
  AspectRatio,
  Text,
  Divider,
  Stack,
  Box,
  Link,
} from "@chakra-ui/react";

// Global Variables
const SHIPPINGPERCENTAGE = 0.1;
const TAXES = 0.09;

const CheckoutCart = () => {
  const bgColor = "gray.50";
  const secondaryTextColor = "gray.600";
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const subtotal = +(Math.round(totalAmount + "e+2") + "e-2");
  const shippingCost = +(
    Math.round(totalAmount * SHIPPINGPERCENTAGE + "e+2") + "e-2"
  );
  const taxesCost = +(Math.round(totalAmount * TAXES + "e+2") + "e-2");
  const newTotal = subtotal + shippingCost + taxesCost;
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      align="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your cart</Heading>
        <Text>Thank you for shopping with Fitness+</Text>
      </VStack>
      {items.length === 0 && (
        <Box>
          No Items In Cart.{" "}
          <Link as={RouterLink} to={"/products"} color="blue.400">
            Click Here To Go Shopping Now!
          </Link>
        </Box>
      )}
      {items.map((cartItem) => (
        <HStack
          spacing={6}
          alignItems="center"
          w="full"
          key={`${cartItem.item.productDetails.productName}-${
            cartItem.item.productDetails.productid
          }-${cartItem.size}-${cartItem.color.toUpperCase()}`}
        >
          <AspectRatio ratio={1} w={24}>
            <Link
              as={RouterLink}
              to={`/products/${cartItem.item.category}/${cartItem.item.subcategory}/${cartItem.item.productDetails.productName}/details`}
            >
              <Image
                src={cartItem.item.productDetails.imageOne}
                alt={cartItem.item.productDetails.productName}
              />
            </Link>
          </AspectRatio>
          <Stack
            spacing={0}
            w="full"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <VStack w="full" spacing={0} alignItems="flex-start">
              <Heading size="md">
                {cartItem.item.productDetails.productName}
              </Heading>
              <Text color={secondaryTextColor}>
                Size: {cartItem.size} Color: {cartItem.color.toUpperCase()}
              </Text>
            </VStack>
            <Heading size="sm" textAlign="end">
              $
              {
                +(
                  Math.round(
                    cartItem.item.productDetails.price * cartItem.quantity +
                      "e+2"
                  ) + "e-2"
                )
              }
            </Heading>
          </Stack>
        </HStack>
      ))}

      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">${totalAmount.toFixed(2)}</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">+${shippingCost.toFixed(2)}</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">+${taxesCost.toFixed(2)}</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">{`$ ${newTotal.toFixed(2)}`}</Heading>
      </HStack>
    </VStack>
  );
};

export default CheckoutCart;
