// React Router
import { Link as RouterLink } from "react-router-dom";

// CSS
import {
  Select,
  Checkbox,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";

const CheckoutDetails = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>
          If you already have an account, click{" "}
          <Link color={"blue.400"} as={RouterLink} to={"/login"}>
            here
          </Link>{" "}
          to log in.
        </Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Smith" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="123 Awesome Street" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Scottsdale" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to Billing Address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button colorScheme={"blue"} size="lg" w="full">
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default CheckoutDetails;
