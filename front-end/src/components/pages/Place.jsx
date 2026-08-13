import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UseUserContext } from "../context/UserContext";
import Perk from "../Perk";

const Place = () => {
  const { id } = useParams();
  const [place, setPlace] = useState("");
  const [overlay, setOverlay] = useState(false);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guest, setGuest] = useState("");
  const { user } = UseUserContext();

  useEffect(() => {
    if (id) {
      const axiosGet = async () => {
        const { data } = await axios.get(`/places/${id}`);
        setPlace(data);
      };
      axiosGet();
    }
  }, [id]);

  useEffect(() => {
    overlay
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [overlay]);

  const handleBooking = () => {
    e.preventDefault();
    if (checkin && checkout && guest) {
    } else {
      alert("preencha todas as informacoes");
    }
  };

  if (!place) return <></>;

  return (
    <div className="mx-auto flex max-w-6xl flex-col  gap-6 px-5 py-5 sm:p-5">
      {/*container de titulo */}
      <div className="flex flex-col gap-1">
        <div className=" text-2xl md:text-3xl font-bold">{place.title}</div>
        <div className="flex items-center gap-2">
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
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <p>{place.adress}</p>
        </div>
      </div>

      {/*grid container */}
      <div className="relative grid aspect-3/2  gap-4 overflow-hidden rounded-2xl sm:grid-cols-[2fr_1fr] sm:grid-rows-2  ">
        {place.photo
          .filter((photo, index) => index < 3)
          .map((photo, index) => (
            <img
              key={index}
              className={`${index === 0 ? "row-span-2 h-full object-center sm:object-cover" : ""}cursor-pointer aspect-square w-full object-cover transition hover:opacity-75`}
              src={place.photo[index]}
              alt="imagen da acomodacao"
              onClick={() => setOverlay(true)}
            />
          ))}
        <div
          onClick={() => setOverlay(true)}
          className="hover:scale-105% absolute right-3 bottom-2 flex cursor-pointer rounded-2xl border border-black bg-white px-2 py-1 transition"
        >
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
              d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <p>Mostrar mais imagens</p>
        </div>
      </div>

      {/*colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="order-1 md:order-0 flex flex-col gap-4 p-4">
          <div>
            <p className="m-1 text-1xl md:text-2xl font-bold">Descrição</p>
            <p>{place.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">Diferenciais</p>
            <div>
              {place.perks.map((perk) => (
                <div className="flex gap-3"> <Perk perk={perk}/></div>
              )
               
              )}
            </div>
          </div>
          <div>
            <p className="m-1 text-2xl font-bold">Horarios e restricoes</p>
            <div>
              <p>Checkin: {place.checkin}</p>
              <p>Checkout: {place.checkout}</p>
              <p>Maximo de convidados: {place.guest}</p>
            </div>
          </div>
        </div>
        <form className="self-center justify-self-center rounded-2xl mb-1 border border-gray-200 px-8 py-4">
          <p className="mb-1 text-center text-2xl font-bold">
            {" "}
            Preco: R${place.price}
          </p>
          <div className="flex">
            <div className="rounded-tl-2xl rounded-bl-2xl border border-gray-300 px-4 py-2">
              <p className="font-bold">Checkin</p>
              <input
                type="date"
                name=""
                id=""
                value={checkin}
                onChange={(e) => {
                  setCheckin(e.target.value);
                }}
              />
            </div>
            <div className="rounded-tr-2xl rounded-br-2xl border border-l-0 border-gray-300 px-4 py-2">
              <p className="font-bold">Checkout</p>
              <input
                type="date"
                name=""
                id=""
                value={checkout}
                onChange={(e) => {
                  setCheckout(e.target.value);
                }}
              />
            </div>
          </div>

          {/*convidados */}
          <div className="flex flex-col gap-2 rounded-2xl px-4 py-2">
            <p className="font-bold">N de convidados</p>
            <input
              className="rounded-2xl border border-gray-300 px-4 py-2"
              placeholder="2"
              type="number"
              name=""
              id=""
              value={guest}
              onChange={(e) => {
                setGuest(e.target.value);
              }}
            />
          </div>
          {user ? (
            <button
              onClick={handleBooking}
              className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 py-2 font-semibold text-white"
            >
              Reservar
            </button>
          ) : (
            <Link to="/login">
              <button
                onClick={handleBooking}
                className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 py-2 font-semibold text-white"
              >
                Faca seu login
              </button>
            </Link>
          )}
        </form>
        {/*extras */}
        <div className="rounded-2xl bg-gray-100 p-4">
          <p className="m-1 text-2xl font-bold">Informacoes extras</p>
          <p>{place.extras}</p>
        </div>
      </div>

      {/* overlay*/}
      <section
        className={`${overlay ? "flex" : "hidden"} fixed inset-0 items-start overflow-y-auto bg-black text-white`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
          <div className="grid  sm:grid-cols-2 gap-4 p-2">
            {place.photo.map((photo, index) => (
              <img
                key={index}
                className="aspect-square w-full m-1 cursor-pointer object-cover"
                src={place.photo[index]}
                alt="imagen da acomodacao"
              />
            ))}
          </div>
        </div>

        <button
          className="hover:scale-105% absolute top-4 right-4 aspect-square w-10 cursor-pointer rounded-full bg-white font-bold text-black transition"
          onClick={() => setOverlay(false)}
        >
          x
        </button>
      </section>
    </div>
  );
};

export default Place;
