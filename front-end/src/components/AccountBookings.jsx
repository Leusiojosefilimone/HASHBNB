import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Booking from "./Booking";

const AccountBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const axiosGetBookings = async () => {
      const { data } = await axios.get("/bookings");
      setBookings(data);
    };
    axiosGetBookings();
  }, []);

  return (
    <div className="w-full max-w-6xl xl:px-9">
      {bookings.map((booking) => (
       <Booking booking={booking} key={booking._id}/>
      ))}
    </div>
  );
};

export default AccountBookings;
