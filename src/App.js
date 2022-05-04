import "./App.scss";
import { Home } from "./components/Home";
import { Form } from "./components/Form";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Nav } from "./pages/Nav";
import { UpdateUser } from "./components/updateUser";

function App() {
  return (
    <div>
      <Nav className="nav" />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/update/:id" element={<UpdateUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
