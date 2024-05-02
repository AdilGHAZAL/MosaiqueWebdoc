import React, { useState } from 'react';
import './Navbar.css';
import Burger from "../assets/menuBurger.svg";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false); // State to manage the menu visibility

  return (
    <div className="navbar">
      <div className="logo-container1">
        <a href="URL_of_the_first_logo" target="_blank" rel="noopener noreferrer">
          <img className="logo" src="./src/logos/logoMosaique.svg" alt="First Logo" />
        </a>
        <img className="cross-icon" src="./src/assets/cross.svg" alt="Cross Icon" />
        <a href="https://www.paris.fr" target="_blank" rel="noopener noreferrer">
          <img className="logo-navbar" src="./src/logos/logoVilledeparis.svg" alt="Second Logo" />
        </a>
      </div>
      <div className="right-container">
        <div className="text-containerNav">
            Athlétisme
        </div>
        <div className="menuBurger">
          <img src={Burger} alt="Menu Burger Icon" onClick={() => setOpen(!isOpen)} />
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          
          <a href="/login">Login</a>
          <a href="#parcours">Des parcours examplaire</a>
          <a href="#exclusive">Vidéo exclusive</a>
          <a href="#sessions">Séances d'entraînement</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
