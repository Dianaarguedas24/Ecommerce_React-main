import React from "react";
import "./App.css";
import Products from "./componentes/Products";
import Inicio from "./componentes/Inicio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import LogginPage from "./componentes/LogginPage";
import Carousel from "./componentes/Carousel";
import OfertaCarousel from "./componentes/OfertaCarrousel";
import NuevoCarousel from "./componentes/NuevoCarousel";
import Navbar1 from "./componentes/NavBar1";
const App = () => {
  return (
    <Router>
      <Navbar closed={true} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="Productos" element={<Products />} />
        <Route path="Inicio" element={<Inicio />} />
        <Route path="Registro" element={<LogginPage />} />
      </Routes>

      <div className="App">
        <Navbar1 />
        <h1>Explore nuestros productos</h1>
        <Carousel />
        <h2>Productos en oferta</h2>
        <OfertaCarousel />
        <h2>Productos Nuevos</h2>
        <NuevoCarousel />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
