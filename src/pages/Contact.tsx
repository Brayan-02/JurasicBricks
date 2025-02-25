import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaTiktok } from "react-icons/fa";
import logo from "../imagenes/logoj.png";

function Contact() {
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

      {/* Contenido de la página de Contacto */}
      <div className="page-container">
        {/* Sección de contacto Coach */}
        <div className="contact-section">
          <h2>Contacto Coach</h2>
          <div className="contact-info">
            <p><FaPhone className="icon" /> +57 3024663945</p>
            <p><FaEnvelope className="icon" /> coach@ejemplo.com</p>
            <p><FaMapMarkerAlt className="icon" /> Nemocón, Cundinamarca</p>
            <p><FaClock className="icon" /> Lun - Vie: 7:00 AM - 2:00 PM</p>
          </div>
        </div>

        {/* Sección de contacto Director de Club */}
        <div className="contact-section">
          <h2>Contacto Director de Club</h2>
          <div className="contact-info">
            <p><FaPhone className="icon" /> +57 3111234567</p>
            <p><FaEnvelope className="icon" /> director@ejemplo.com</p>
            <p><FaMapMarkerAlt className="icon" /> Nemocón, Cundinamarca</p>
            <p><FaClock className="icon" /> Lun - Vie: 8:00 AM - 3:00 PM</p>
          </div>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="contact-section">
          <h2>Conéctate con Nosotros</h2>
          <div className="social-icons">
            <a href="https://www.instagram.com/jurassic_bricks2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@jurassic_bricks_?_t=ZS-8uDVC7mz1su&_r=1" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTiktok className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
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

export default Contact;
