import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <a href="https://ceadsv.org/" className="logo">
          <img src="src/assets/logo AD.png" alt="Logo" />
        </a>

        <nav className="desktop-menu">
          <a href="#inicio">Inicio</a>

          <div className="dropdown">
            <span>Nuevas Generaciones</span>

            <div className="dropdown-content">
              <a href="#exploradores">Exploradores</a>
              <a href="#misioneritas">Misioneritas</a>
              <a href="#escuela">Escuela Bíblica</a>
              <a href="#embajadores">Embajadores</a>
            </div>
          </div>

          <a href="#concilio">Concilio</a>
          <a href="#fraternidad">Fraternidad</a>
          <a href="#misiones">Misiones</a>
          <a href="#media">Media</a>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </header>

      <div
        className={`overlay-menu ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <a href="#inicio">Inicio</a>

        <details>
          <summary>Nuevas Generaciones</summary>

          <a href="#exploradores">Exploradores</a>
          <a href="#misioneritas">Misioneritas</a>
          <a href="#escuela">Escuela Bíblica</a>
          <a href="#embajadores">Embajadores</a>
        </details>

        <a href="#concilio">Concilio</a>
        <a href="#fraternidad">Fraternidad</a>
        <a href="#misiones">Misiones</a>
        <a href="#media">Media</a>
      </div>
    </>
  );
}

export default Navbar;
