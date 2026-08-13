import React from "react";
import { useState } from "react";
import Perk from "./Perk";

const Perks = ({perks, setPerks}) => {
   
    const handleClick = (target) => {
        if (target.checked) {
            setPerks((prev) => [...prev, target.id]);
    }else {
        setPerks((prev) => prev.filter((perk) => perk !== target.id));
    }}
   
  return (
    <div className="flex flex-col gap-2">
      <h3 htmlFor="title" className="ml-3 text-2xl font-semibold">
        Comodidades
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        <label
          htmlFor="wifi "
          className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
        >
          <input
            type="checkbox"
            id="wifi"
            checked={perks.includes("wifi")}
           onChange={(e) => handleClick(e.target)}
          />
         <Perk perk={"wifi"}/>
        </label>
        <label
          htmlFor="radio"
          className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
        >
          <input
            type="checkbox"
            id="radio"
             checked={perks.includes("radio")}
            onChange={(e) => handleClick(e.target)}
          />
           <Perk perk={"radio"}/>
         
        </label>
        <label
          htmlFor="Tv"
          className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
        >
          <input
            type="checkbox"
            id="Tv"
             checked={perks.includes("Tv")}
                 onChange={(e) => handleClick(e.target)}
          />
          <Perk perk={"Tv"}/>
        </label>
        <label
          htmlFor="pets"
          className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
        >
          <input
            type="checkbox"
            id="pets"
             checked={perks.includes("pets")}
           onChange={(e) => handleClick(e.target)}
          />
         <Perk perk={"pets"}/>
        </label>
        <label
          htmlFor="estacionamento"
          className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
        >
          <input
            type="checkbox"
            id="estacionamento"
             checked={perks.includes("estacionamento")}
               onChange={(e) => handleClick(e.target)}
          />
           <Perk perk={"estacionamento"}/>
        </label>
      </div>
    </div>
  );
};

export default Perks;
