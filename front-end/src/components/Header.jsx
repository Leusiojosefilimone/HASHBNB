import React from "react";
import { Link } from "react-router-dom";
import { UseUserContext } from "./context/UserContext";

const Header = () => {
  const {user} = UseUserContext()

  return (
    <div className="shadow-md">
      <div className="mx-auto flex max-w-6xl justify-between px-2 py-2">
        <div className="flex h-10 items-center">
          <img
            className="h-10"
             src="https://cdn.prod.website-files.com/61b9e0dd381626819c8d4f83/65e2198d48039ba6444f602b_logo%20hashtag%20-%20h.webp"
            alt="Logo da Hashtag"
          />
          <p className="text-primary-400 text-2xl font-bold">ashbnb</p>
        </div>
        <div className="hidden items-center rounded-full border border-gray-300 pr-4 pl-6 shadow-sm lg:flex">
          <p className="border-r border-r-gray-300 px-3">Qualquer lugar</p>
          <p className="border-r border-r-gray-300 px-3">Qualquer semana</p>
          <p className="px-3">hospedes</p>
          <div className="bg-primary-400 rounded-full p-1 text-white">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </p>
          </div>
        </div>
        <div>
          <Link to={user ? "/account/profile" :"/login"} className="flex items-center gap-2 rounded-full border border-gray-300 py-1 pr-4 pl-6 text-gray-600 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

          {user ?  <p className="max-w-20  hidden truncate md:block">{user.name}</p> : <></>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
