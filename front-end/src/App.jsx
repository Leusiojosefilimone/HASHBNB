import Header from "./components/Header";
import Item from "./components/item";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Account from "./components/pages/Account";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import {UserContextProvider }from "./components/context/UserContext";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3000";
//console.log(import.meta.env);

function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login  />}
            />
            <Route path="/register" element={<Register  />} />
            <Route
              path="/account/:subpage?"
              element={<Account />}
            />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
