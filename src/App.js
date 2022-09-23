import { Fragment } from "react";

// Router
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Main from "./components/main/Main";

// CSS

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      {/* <Header />
      <Main />
      <div>Hello</div> */}
    </Fragment>
  );
}

export default App;
