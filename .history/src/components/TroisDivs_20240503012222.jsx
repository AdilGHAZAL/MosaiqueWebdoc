import React from 'react';
import logo1 from '../assets/Icon3.svg';
import logo2 from '../assets/Icon2.svg';
import logo3 from '../assets/Group.svg';
import './TroisDivs.css';

const TroisDivs = () => {
  return (
    <div>
      <h1 className="TitreTroisDivs">Leur conseils
pour debuter</h1>
      <div className="conteneur-trois-divs">
        <div className="carteTroisDivs">
          <img src={logo1} alt="Logo 1" />
          <h3>Matériel</h3>
          <p>Tout ce dont vous avez besoin pour commencer</p>
        </div>
        <div className="carteTroisDivs">
          <img src={logo2} alt="Logo 2" />
          <h3>Entraînement</h3>
          <p>Tout ce que vous devez savoir sur la préparation physique</p>
        </div>
        <div className="carteTroisDivs">
          <img src={logo3} alt="Logo 3" />
          <h3>Astuces</h3>
          <p>Tout ce que vous devez savoir pour bien finir la séance</p>
        </div>
      </div>
      <div className="centrer-bouton">
        
      <Link to={`/training`}>
          <div className="image-button-sentrainer">
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TroisDivs;
