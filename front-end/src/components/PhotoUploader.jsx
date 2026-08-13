import React from "react";
import { useState } from "react";
import axios from "axios";

const PhotoUploader = ({ photo, setPhoto, photoLink, setPhotoLink }) => {
  const upLoadPhotoLink = async (e) => {
    console.log("estou aqui");
    if (photoLink) {
      try {
        const { data: imageUrl } = await axios.post("/places/upload/link", {
          link: photoLink,
        });

        setPhoto((prevValue) => [...prevValue, imageUrl]);
        console.log(photo);
        console.log("imagem enviada com sucesso");
      } catch (error) {
        console.error(JSON.stringify(error));
        console.log("deu erro ao enviar a imagem");
      }
    } else {
      alert("adicione um link de imagem");
    }
  };
  const uploadPhoto = async (e) => {
    const { files } = e.target;
    const formData = new FormData();
    const filesArry = [...files];

    filesArry.forEach((file) => formData.append("files", file));

    try {
      const { data: fileURLArry } = await axios.post(
        "/places/upload",
        formData,
        {
          headers: {
            "Content-Type": "multiplepart/form-data",
          },
        },
      );
      fileURLArry.map((file) =>
        setPhoto((prevValue) => [...prevValue, file.url]),
      );
      console.log(fileURLArry);
      console.log("imagem enviada com sucesso");
    } catch (error) {
      console.error(JSON.stringify(error));
      console.log("deu erro ao enviar a imagem");
    }
  };
  const deletePhoto = (fileUrl)=> {
    const newPhotos = photo.filter(photo => photo !== fileUrl)
    setPhoto(newPhotos)

  }
  const promotePhoto = (fileUrl) => {
 const newPhotos =[fileUrl, ...photo.filter(photo => photo !== fileUrl)]
    setPhoto(newPhotos)
  }

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
        {photo.map(
          (photo) => (
            console.log(photo),
            (
              <div className="relative">
                <img
                  className="aspect-square rounded-2xl object-cover"
                  src={photo}
                  key={photo}
                  alt="image do lugar"
                />
                <div>
                  <div className="flex gap-2 absolute right-1 bottom-2">
                   
                    <div onClick={() => promotePhoto(photo)} className="bg-gray-100 opacity-70 rounded-full p-1 transition hover:bg-primary-400 cursor-pointer ">
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
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    </div>
                     <div onClick={() => deletePhoto(photo)} className="bg-gray-100 opacity-70 rounded-full p-1 transition hover:bg-primary-400 cursor-pointer ">
                      {" "}
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
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )
          ),
        )}
        <label
          htmlFor="photo"
          className="flex aspect-square cursor-pointer items-center justify-center gap-2 rounded-2xl border border-gray-300"
        >
          <input
            type="file"
            multiple
            onChange={uploadPhoto}
            name=""
            id="photo"
            className="hidden"
          />
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
