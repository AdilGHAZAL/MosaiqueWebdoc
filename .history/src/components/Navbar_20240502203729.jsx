import React, { useState } from 'react';
import './Navbar.css';
import Burger from "../assets/menuBurger.svg";
import Cross from "../assets/cross.svg";
import iconMosaique from "../logos/logoMosaique.svg";
import iconVilleparis from "../logos/logoVilledeparis.svg";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false); // State to manage the menu visibility

  return (
    <div className="navbar">
      <div className="logo-container">
        <a href="URL_of_the_first_logo" src={iconMosaique} rel="noopener noreferrer">
          <img className="logo" src="./src/logos/logoMosaique.svg" alt="First Logo" />
        </a>
        <img className="cross-icon" src={Cross} alt="Cross Icon" />
        <a href="https://www.paris.fr" src={iconVilleparis} rel="noopener noreferrer">
          <img className="logo" src="./src/logos/logoVilledeparis.svg" alt="Second Logo" />
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
