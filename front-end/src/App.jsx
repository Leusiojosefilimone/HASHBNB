import Header from "./components/Header";
import Item from "./components/item";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = "http://localhost:3000";
//console.log(import.meta.env);


function App() {
  const [user, setUser] = useState()
  return (
    <>
      <BrowserRouter>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login user={user}setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
