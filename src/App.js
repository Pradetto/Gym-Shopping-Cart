import { Fragment, useState } from "react";

// Components
import HomePage from "./pages/HomePage";
import Header from "./components/header/Header";
import ProductsPage from "./pages/ProductsPage";
import SignUpPage from "./pages/SignUpPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import ShoppingCartModal from "./components/cart/ShoppingCartModal";
// import Footer from "./components/footer/Footer";

// Router
import { Routes, Route, Navigate } from "react-router-dom";

// Components
// import Header from "./components/header/Header";
// import Main from "./components/main/Main";

// CSS
// import { Flex } from "@chakra-ui/react";
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const cartDisplayHandler = () => {
  //   setCartDisplay(true);
  // };
  // const cartNotDisplayHandler = () => {
  //   setCartDisplay(false);
  // };
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
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products/*" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </GridItem>
      </Grid>
      {isOpen && (
        <ShoppingCartModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      )}
      {/* Make a dynamic footer one for the home page then one for the rest and I can put a link to the credits from there */}
      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;
