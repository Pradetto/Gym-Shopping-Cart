import { Fragment } from "react";

// Components
import HomePage from "./pages/HomePage";
import Header2 from "./components/header/Header2";

// Router
import { Routes, Route, Navigate } from "react-router-dom";

// Components
// import Header from "./components/header/Header";
// import Main from "./components/main/Main";

// CSS
// import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Fragment>
      {/* <Flex display={{ sm: "none", md: "flex" }}>
        <Header />
      </Flex> */}
      <Header2 />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      {/* <Header />
      <Main />
      <div>Hello</div> */}
    </Fragment>
  );
}

export default App;
