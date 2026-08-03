import React from "react";
import { Link } from "react-router-dom";

const Item = () => {
  return (
  
    <Link to="/item" className="flex flex-col p-2 gap-0.5">
        <img
        className="aspect-square rounded-2xl object-cover"
        src="/image.png"
        alt="image"
      />
      <h3 className="font-semibold text-xl">Lorem ipsum dolor </h3>
      <p className="truncate text-gray-600">
        color sit amet consectetur adipisicing elit. harum accusamus
        quae, consequatur dolorem autem vero labor
      </p>
      <p>
        <span>590</span>
      </p>
    </Link>
    
  );
};

export default Item;
