import React, { useState } from "react";
import Perks from "./Perks";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UseUserContext } from "./context/UserContext";
import PhotoUploader from "./PhotoUploader";

const NewPlace = () => {
  const [title, setTitle] = useState("");
  const [redirect, setredirect] = useState(false);
  const [photoLink, setPhotoLink] = useState("");
  const [photo, setPhoto] = useState([]);
  const [adress, setAdress] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [checkin, setCheckin] = useState("");
  const [extras, setExtras] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guest, setGuest] = useState("");
  const [perks, setPerks] = useState([]);
  const { user } = UseUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      title &&
      adress &&
      description &&
      price &&
      checkin &&
      extras &&
      checkout &&
      guest
    ) {
      console.log("todos estao preenchidos");
      try {
        const newPlace = axios.post("/places", {
          owner: user._id,
          title,
          photo,
          adress,
          description,
          price,
          perks,
          checkin,
          extras,
          checkout,
          guest,
        });
        console.log(NewPlace);
        setredirect(true);
      } catch (error) {
        console.error(JSON.stringify(error));
        alert("deu erro ao criar o novo lugar");
      }
    } else {
      alert("preencha todas informacoes");
    }
  };

  if (redirect) return <Navigate to="/account/places" />;
  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        Titulo
        <label htmlFor="title" className="ml-3 text-2xl font-semibold"></label>
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
      <PhotoUploader {...{ photo, setPhoto, photoLink, setPhotoLink }} />
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

      <Perks {...{ perks, setPerks }} />

      <div className="flex flex-col gap-2">
        <label htmlFor="info" className="ml-3 text-2xl font-semibold">
          informacoes Extras
        </label>
        <textarea
          className="h-56 resize-none rounded-2xl border border-gray-300 py-1 pr-4 pl-6 text-gray-600 shadow-sm"
          placeholder="digite a descricao do seu anuncio"
          name=""
          id="info"
          value={extras}
          onChange={(e) => {
            setExtras(e.target.value);
          }}
        />
      </div>
      <div>
        <h3 className="m-2 text-2xl font-semibold">Restricoes e Precos</h3>

        <div className="grid-cols-[repeat(auto-fit,minmax(225px,1fr)) grid gap-6">
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
              onChange={(e) => setPrice(e.target.value)}
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
              onChange={(e) => setCheckin(e.target.value)}
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
              onChange={(e) => setCheckout(e.target.value)}
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
              onChange={(e) => setGuest(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-5 w-full">
          <button className="hover:bg-primary-500 align-center bg-primary-400 flex w-full min-w-44 cursor-pointer justify-center rounded-full py-2 text-white transition">
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
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Salvar Informacoes
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewPlace;
