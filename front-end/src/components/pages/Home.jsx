import React from "react";
import Item from "../item";

const Home = () => {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-4 px-8 py-2">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};

export default Home;
