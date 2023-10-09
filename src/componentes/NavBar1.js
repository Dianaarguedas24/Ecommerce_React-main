import React from "react";

import logo from "../log.png"; // Ruta de la imagen de la tienda (ajusta la ruta según tu estructura de archivos)

const Navbar1 = () => {
  return (
    <nav className="navbar">
      <div className="nav-principal">
        <div className="navbar-brand">
          <a href="/">
            <img src={logo} alt="Logo de la Tienda" />
          </a>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="         Buscar..." />
          <button onClick="#">
            <span class="material-symbols-outlined">search</span>
          </button>
        </div>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/acerca">Iniciar Sesion</a>
            </li>
            <li className="nav-item">
              <a href="Registrarme">Registrarme</a>
            </li>
            <li className="nav-item">
              <a href="/carrito">
                <span class="material-symbols-outlined">shopping_bag</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <ul className="navbar-categorias">
          <li className="nav-item">
            <a href="Anillos">Anillos</a>
          </li>
          <li className="nav-item">
            <a href="Pendientes">Pendientes</a>
          </li>
          <li className="nav-item">
            <a href="Collares">Collares</a>
          </li>
          <li className="nav-item">
            <a href="Pulseras">Pulseras</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
