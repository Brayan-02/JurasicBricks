import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCalendarAlt, FaTrophy, FaUsers } from "react-icons/fa";
import "./Home.css"; 
import logo from "../imagenes/logoj.png"; 
import homeImage from "../imagenes/imagenhome.png"; 

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Jurassic Bricks Logo" className="logo" />
          <span className="title">
            Jurassic <span className="highlight">Bricks</span>
          </span>
        </div>

        {/* Botón de menú hamburguesa */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Menú de navegación */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Acerca de</NavLink>
          <NavLink to="/contact">Contactos</NavLink>
        </nav>
      </header>

      {/* Sección principal con texto e imagen */}
      <main className="home-main">
        <div className="home-content">
          <div className="home-text">
            <h1>
              <span className="text-white">Nosotros</span> <br />
              <span className="text-blue">Somos</span> <br />
              <span className="text-aquamarine">Jurassic Bricks</span>
            </h1>
            <p className="home-description">
              Equipo de robótica FLL apasionado por la innovación y la tecnología, 
              apoyados por el Colegio San Francisco de Asís de Nemocón, 
              la Alcaldía de Nemocón y la Mina de Sal de Nemocón.
            </p>
          </div>
          <div className="home-image">
            <img src={homeImage} alt="Equipo de robótica" />
          </div>
        </div>
      </main>

      {/* Sección de estadísticas */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Miembros</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Competencias</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Premios</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Proyectos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de la próxima competencia */}
      <section className="competition-card">
        <h2>Próxima Competencia.</h2>
        <p className="competition-subtitle">FLL Challenge 2025 SUBMERGED - Competencia nacional</p>
        
        {/* Información de la competencia */}
        <div className="competition-details">
          <div className="competition-item">
            <FaCalendarAlt className="icon" />
            <span>Febrero 25-26, 2025</span>
          </div>
          <div className="competition-item">
            <FaTrophy className="icon" />
            <span>Centro de convenciones de Cartagena</span>
          </div>
          <div className="competition-item">
            <FaUsers className="icon" />
            <span>40 Equipos</span>
          </div>
        </div>

        {/* Botón */}
        <a 
          href="https://www.uniminuto.edu/fest-stem?fbclid=PAZXh0bgNhZW0CMTEAAaYJ5XJ4wyWvl4lWdq4BU09eJTDCeWdjXU3CdTD4-Wl7omUWGbXjPo4ZQN8_aem_VtDZorok0211jGC6ztuTFg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="competition-button"
        >
          Más Información
        </a>

      </section>
      <footer className="footer">
        <hr className="footer-line" />
        <div className="footer-content">
          <img src={logo} alt="Jurassic Bricks Logo" className="footer-logo" />
          <p className="footer-text">© 2024 Jurassic Bricks</p>
          <p className="developer">Desarrollado por: <span className="dev-name">ING Brayan Forigua</span></p>
        </div>
      </footer>


    </>
  );
}

export default Home;
