import Header from "./components/Header";
import Item from "./components/item";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';



function App() {
  return (
    <>
   
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
   

    </>
  );
}

export default App;
