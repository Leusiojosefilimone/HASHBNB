import React, { useState, useEffect } from "react";
import Item from "../Item";
import axios from "axios";

const Home = () => {
    const [places, setPlaces] = useState([])

    useEffect(()=> {
      const axiosGetPlaces = async()=>{
        const {data} = await axios.get('/places')
        console.log(data)
        setPlaces(data)
      }
      axiosGetPlaces()
    },[])
  
  return (
<section className="max-w-6xl mx-auto">
  <div className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-4 px-5 py-3">
    {places.map(place => <Item key={place._id} {...{place}} />)}
      </div>
</section>
    
   
  );
};

export default Home;
