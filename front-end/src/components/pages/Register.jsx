import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UseUserContext } from "../context/UserContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUser} = UseUserContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && name) {
      try {
        const { data: userDoc } = await axios.post("/users/register", {
          name,
          email,
          password,
        });
        console.log(userDoc);
        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        alert(`deu um erro ao cadastrar o usuario: ${JSON.stringify(error)}`);
      }
    } else {
      alert("voce precisa preechenr o nome, o email e a senha");
    }
  };
  if (redirect) return <Navigate to="/" />;
  return (
    <section className="flex w-full items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4 px-8">
        <h1 className="text-3xl font-bold">Faca seu Cadastro</h1>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
          <input
            placeholder="digite seu nome"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
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
            Cadastrar
          </button>
        </form>
        <p>
          Ja tem um conta?{" "}
          <Link to="/login" className="font-semibold underline" href="#">
            Entre aqui
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
