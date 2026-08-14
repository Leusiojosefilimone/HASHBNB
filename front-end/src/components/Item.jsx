import React from "react";
import { Link } from "react-router-dom";

const Item = ({place}) => {
  return (
  
    <Link to={`/place/${place._id}`} className="flex flex-col p-2 gap-0.5">
        <img
        className="aspect-square rounded-2xl object-cover"
        src={place.photo[0]}
        alt="image"
      />
      <h3 className="font-semibold text-xl">{place.title}</h3>
      <p className="truncate text-gray-600">
        {place.description}
      </p>
      <p>
       <span  className="font-bold"> {place.price} mt </span>por noite
      </p>
    </Link>
    
  );
};

export default Item;
