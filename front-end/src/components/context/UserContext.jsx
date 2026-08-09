import { createContext, useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'

   const UserContext = createContext(null);
   export const UseUserContext = () => useContext(UserContext)


export const UserContextProvider = ({ children }) => {

const [user, setUser] = useState(null)
const [ready, setReady] = useState(false)
  
  useEffect(()=> {
    const axiosGet = async()=>{
      const {data} = await axios.get('/users/profile')
      setUser(data)
      setReady(true)
    }
    axiosGet()
  },[])

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  )
}

