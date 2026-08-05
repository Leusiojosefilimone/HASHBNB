import React, { useState } from "react";
import Perks from "./Perks";

const NewPlace = () => {
 
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [adress, setAdress] = useState("");
  const [info, setInfo] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [checkin, setCheckin] = useState("");
  const [extras, setExtras] = useState("");
  const [checkout, setCheckout] = useState("");
   const [guest, setGuest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
          Titulo
        <label htmlFor="title" className="ml-3 text-2xl font-semibold">
        </label>
        <input
          type="text"
          className="rounded-full border border-gray-300 py-2 pr-4 pl-6 text-gray-600 shadow-sm"
          placeholder="digite o titulo do seu anuncio"
          name=""
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="adress" className="ml-3 text-2xl font-semibold">
          Cidade e pais
        </label>
        <input
          type="text"
          className="rounded-full border border-gray-300 py-2 pr-4 pl-6 text-gray-600 shadow-sm"
          placeholder="Digite a Cidade do seu anuncio"
          name=""
          id="adress"
          value={adress}
          onChange={(e) => {
            setAdress(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="photoLink" className="m-2 ml-3 text-2xl font-semibold">
          Photo
        </label>
        <div className="gap-2 md:flex">
          <input
            type="text"
            className="mb-3 grow rounded-full border border-gray-300 py-2 pr-4 pl-6 text-gray-600 shadow-sm"
            placeholder="Adicione link de uma foto"
            name=""
            id="photoLink"
            value={adress}
            onChange={(e) => {
              setAdress(e.target.value);
            }}
          />
          <button className="ms:w-full mx-4 mb-3 cursor-pointer rounded-full border border-gray-300 bg-gray-200 py-2 pr-4 pl-6 text-gray-600 shadow-sm transition hover:bg-gray-300">
            Enviar Foto
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <label
            htmlFor="photo"
            className="flex aspect-square cursor-pointer items-center justify-center gap-2 rounded-2xl border border-gray-300"
          >
            <input type="file" name="" id="photo" className="hidden" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            upload
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="ml-3 text-2xl font-semibold">
          Descricao
        </label>
        <textarea
          className="h-56 resize-none rounded-2xl border border-gray-300 py-1 pr-4 pl-6 text-gray-600 shadow-sm"
          placeholder="digite a descricao do seu anuncio"
          name=""
          id="descripition"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <Perks />
      <div className="flex flex-col gap-2">
        <label htmlFor="info" className="ml-3 text-2xl font-semibold">
          informacoes Extras
        </label>
        <textarea
          className="h-56 resize-none rounded-2xl border border-gray-300 py-1 pr-4 pl-6 text-gray-600 shadow-sm"
          placeholder="digite a descricao do seu anuncio"
          name=""
          id="info"
          value={info}
          onChange={(e) => {
            setInfo(e.target.value);
          }}
        />
      </div>
      <div>
        <h3 className="m-2 text-2xl font-semibold">Restricoes e Precos</h3>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="ml-2 text-xl font-bold">
              Preco
            </label>
            <input
              type="number"
              placeholder="500"
              id="price"
              className="rounded-full border border-gray-300 px-4 py-2"
               value={price}
              onChange={(e) => setPrice}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="checkin" className="ml-2 text-xl font-bold">
              Checkin
            </label>
            <input
              type="number"
              id="checkin"
              className="rounded-full border border-gray-300 px-4 py-2"
               value={checkin}
              onChange={(e) => setCheckin}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="checkout" className="ml-2 text-xl font-bold">
              Checkout
            </label>
            <input
              type="number"
              id="checkout"
              className="rounded-full border border-gray-300 px-4 py-2"
               value={checkout}
              onChange={(e) => setCheckin}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="guest" className="ml-2 text-xl font-bold">
              n Convidados
            </label>
            <input
              type="number"
              id="guest"
              className="rounded-full border border-gray-300 px-4 py-2"
              value={guest}
              onChange={(e) => setGuest}
            />
          </div>
         </div>
         <div className="w-full mt-5 ">
          <button className="hover:bg-primary-500 flex align-center justify-center w-full bg-primary-400  min-w-44 cursor-pointer rounded-full py-2 text-white transition"
  ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>Salvar Informacoes</button>
         </div>
        </div>
         
    </form>
  );
};

export default NewPlace;
