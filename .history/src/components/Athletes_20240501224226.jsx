import React from 'react';
import './Athletes.css';
import {Link} from 'react-router-dom'; 


const MonComposant = () => {
  return (
    <div className="containerAthletes">
      <div className="photoAthletes">
        {/* Ajoutez votre composant photo ici */}
        <img src="./src/assets/photo1.png" alt="Description de la photo" />
      </div>
      <div className="contenuAthletes">
        <h2>Leslie Djhone</h2>
        <p> l'un des meilleurs coureurs de 400 mètres de l'histoire de France</p>
        <Link to='/Athlete1'>
        <div class="image-button-athl">
          <button />
        </div>
        </Link>

      </div>
    </div>
  );
} 
export default MonComposant;
