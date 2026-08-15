import Header from "./components/Header";
import Item from "./components/item";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Account from "./components/pages/Account";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import {UserContextProvider }from "./components/context/UserContext";
import axios from "axios";
import Place from "./components/pages/Place";


axios.defaults.baseURL = import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "http://localhost:3000/api";
axios.defaults.withCredentials = true;
console.log(import.meta.env);

function App() {
  return (
    <div className="max-w-full">
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
              path="/account/:subpage/:action?/:id?"
              element={<Account />}
            />
             <Route path="/place/:id" element={<Place  />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
