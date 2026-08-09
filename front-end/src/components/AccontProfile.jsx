import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UseUserContext } from "./context/UserContext";

function AccontProfile() {
  const [redirect, setRedirect] = React.useState(false);
  const {user, setUser} = UseUserContext()

  const logout = async () => {
    try {
      await axios.post("/users/logout");
      setUser(null);
      setRedirect(true);
      console.log(redirect)
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };



  if (redirect) {
    console.log("Redirecting to home page after logout");
    return <Navigate to={"/"} />;
  }
  if (!user) return <></>;

  return (
    <div className="flex flex-col gap-1">
      <p>Logado como {user.email}</p>
      <button
        onClick={logout}
        className="bg-primary-400 min-w-44 cursor-pointer rounded-full px-4 py-2 text-white transition"
      >
        Logout
      </button>
    </div>
  );
}

export default AccontProfile;
