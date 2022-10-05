import { Fragment } from "react";

// Components
import HomePage from "./pages/HomePage";
import Header from "./components/header/Header";
import ProductsPage from "./pages/ProductsPage";
// import Footer from "./components/footer/Footer";

// Router
import { Routes, Route, Navigate } from "react-router-dom";

// Components
// import Header from "./components/header/Header";
// import Main from "./components/main/Main";

// CSS
// import { Flex } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Fragment>
      <Grid templateRows="80px 1fr">
        <GridItem>
          <Header />
        </GridItem>
        <GridItem>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products/*" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </GridItem>
      </Grid>
      {/* Make a dynamic footer one for the home page then one for the rest and I can put a link to the credits from there */}
      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;
