import React, { Fragment, Suspense } from "react";

// Components
import Header from "./components/header/Header";
import ShoppingCartModal from "./components/cart/ShoppingCartModal";

// Router
import { Routes, Route, Navigate } from "react-router-dom";

// CSS
import {
  Grid,
  GridItem,
  useDisclosure,
  Center,
  VStack,
  Spinner,
  Text,
} from "@chakra-ui/react";

// LAZY LOADING
const ProductsPage = React.lazy(() => import("./pages/ProductsPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const CheckoutPage = React.lazy(() => import("./pages/CheckoutPage"));
const FavoritesPage = React.lazy(() => import("./pages/FavoritesPage"));

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Grid templateRows="80px 1fr">
        <GridItem>
          <Header
            cartDisplay={isOpen}
            cartDisplayHandler={onOpen}
            cartNotDisplayHandler={onClose}
          />
        </GridItem>
        <GridItem>
          <Suspense
            fallback={
              <Center>
                <VStack>
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                  <Text fontWeight={"bold"}>Loading...</Text>
                </VStack>
              </Center>
            }
          >
            <Routes>
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/products/*" element={<ProductsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/*" element={<Navigate replace to="/home" />} />
            </Routes>
          </Suspense>
        </GridItem>
      </Grid>
      {isOpen && (
        <ShoppingCartModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      )}
    </Fragment>
  );
}

export default App;
