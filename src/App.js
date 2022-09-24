import { Fragment } from "react";

// Components
import HomePage from "./pages/HomePage";

// Router
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Main from "./components/main/Main";

// CSS

function App() {
  return (
    <Fragment>
      <Header />
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
