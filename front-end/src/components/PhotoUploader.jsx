import React from "react";
import { useState } from "react";
import axios from "axios";
//import image from "../../../back-end/tmp/1786208390283.jpg";

const PhotoUploader = ({ photo, setPhoto, photoLink, setPhotoLink }) => {
  const upLoadPhotoLink = async (e) => {
    if (photoLink) {
      try {
        const { data: filename } = await axios.post("/places/upload/link", {
          link: photoLink,
        });
        console.log(photo);
        setPhoto((prevValue) => [...prevValue, filename]);
        console.log("imagem enviada com sucesso");
      } catch (error) {
        console.error(JSON.stringify(error));
        console.log("deu erro ao enviar a imagem");
      }
    } else {
      alert("adicione um link de imagem");
    }
  };

  return (
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
          value={photoLink}
          onChange={(e) => {
            setPhotoLink(e.target.value);
          }}
        />
        <button
          onClick={upLoadPhotoLink}
          className="ms:w-full mx-4 mb-3 cursor-pointer rounded-full border border-gray-300 bg-gray-200 py-2 pr-4 pl-6 text-gray-600 shadow-sm transition hover:bg-gray-300"
        >
          Adicionar Foto
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
      {
      photo.map(photo => (
        console.log(photo),
          <img
         className="aspect-square rounded-2xl object-cover"
         src={`${axios.defaults.baseURL}/tmp/${photo}`}
         key={photo}
         alt="image do lugar"/>
         
      ))}
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
  );
};

export default PhotoUploader;
