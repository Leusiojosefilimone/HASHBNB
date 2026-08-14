import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import AccontProfile from "../accontProfile";
import { UseUserContext } from "../context/UserContext";
import AccountPlaces from "../AccountPlaces";
import AccountBookings from "../AccountBookings";

const Account = () => {
  const { subpage } = useParams();
  const {user, setUser, ready} = UseUserContext();

  const buttonClass = (targetBtn) => {
    let finalClass =
      "rounded-full cursor-pointer hover:bg-primary-400 px-4 py-2 hover:text-white transition";
    if (targetBtn === subpage) finalClass += " bg-primary-400  text-white";

    return finalClass;
  };

  if(!user && ready)return <Navigate to="/login"/>
  

  return (
    <section className="p-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <div className="flex gap-4">
          <Link to="/account/profile" className={buttonClass("profile")}>Perfil</Link>
          <Link to="/account/bookings" className={buttonClass("bookings")}>Reservas</Link>
          <Link to="/account/places" className={buttonClass("places")}>Lugares</Link>
        </div>
       {subpage === "profile" && <AccontProfile />}
       {subpage === "places" && <AccountPlaces  />}
       {subpage === "bookings" && <AccountBookings  />}
      </div>
    </section>
  );
};

export default Account;
