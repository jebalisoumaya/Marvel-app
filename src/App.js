import React from "react";
import { Main } from "./Main";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import { Marvel } from "./Marvel";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Marvel />} />
      </Routes>
    </>
  );
}

export default App;
