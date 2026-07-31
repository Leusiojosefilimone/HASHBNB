import React from "react";

const Login = () => {
  return (
    <section className="flex w-full items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4 px-8">
        <h1 className="text-3xl font-bold">Faca seu Login</h1>
        <form className="flex flex-col w-full gap-2">
          <input
            placeholder="digite seu email"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="email"
            name=""
            id=""
          />
          <input
           placeholder="digite sua senha"
            className=" w-full rounded-full border border-gray-300 px-4 py-2"
            type="password"
            name=""
            id=""
          />
          <button className="bg-primary-400 w-full cursor-pointer rounded-full border text-white font-semibold border-gray-300 py-2">
            Login
          </button>
        </form>
        <p>
          Ainda nao tem conta?{" "}
          <a className="font-semibold underline" href="#">
            Resgistre-se aqui
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
