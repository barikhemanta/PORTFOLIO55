import React from "react";
import "./index.css";
import MainPage from "./routes/MainPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes basename="/portfolio85">
        <Route path="/PORTFOLIO55" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
