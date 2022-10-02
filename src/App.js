import { Fragment, useEffect } from "react";

// Components
import HomePage from "./pages/HomePage";
import Header from "./components/header/Header";
import ProductsPage from "./pages/ProductsPage";
// import Footer from "./components/footer/Footer";

// Router
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";

// Redux
import { fetchProducts } from "./store/products-slice";
import { useDispatch } from "react-redux";

// Components
// import Header from "./components/header/Header";
// import Main from "./components/main/Main";

// CSS
// import { Flex } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  // const dispatch = useDispatch();
  // ******************************** DONT FORGET TO ADD SUSPENSE AND REACT.LAZY **************************
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);
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
          </Routes>
        </GridItem>
      </Grid>
      {/* Make a dynamic footer one for the home page then one for the rest and I can put a link to the credits from there */}
      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;
