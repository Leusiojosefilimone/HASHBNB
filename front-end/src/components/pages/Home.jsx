import React from "react";
import Item from "../item";

const Home = () => {
  return (
<section className="max-w-6xl mx-auto">
  <div className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-4 px-8 py-2">
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
