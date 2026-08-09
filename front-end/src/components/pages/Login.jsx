import axios from "axios";
import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UseUserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false)
  const {user, setUser} = UseUserContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const { data: userDoc } = await axios.post("/users/login", {
        email,
        password,
      });
      setUser(userDoc);
      setRedirect(true)
    } else {
      alert("voce precisa preechenr o email e a senha");
    }
  };
  if (redirect || user) return <Navigate to="/"/>
  return (
    <section className="flex w-full mt-5 items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4 px-8">
        <h1 className="text-3xl font-bold">Faca seu Login</h1>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
          <input
            placeholder="digite seu email"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="email"
            name=""
            id=""
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="digite sua senha"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="password"
            name=""
            id=""
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 py-2 font-semibold text-white">
            Login
          </button>
        </form>
        <p>
          Ainda nao tem conta?{" "}
           <Link to="/register" className="font-semibold underline" href="#">
            Registe-se aqui
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
