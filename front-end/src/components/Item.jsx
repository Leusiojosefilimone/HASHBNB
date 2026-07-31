import React from "react";

const Item = () => {
  return (
    <a href="./" className="flex flex-col gap-3">
      <img
        className="aspect-square rounded-2xl object-cover"
        src="./image.jpg"
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
    </a>
  );
};

export default Item;
