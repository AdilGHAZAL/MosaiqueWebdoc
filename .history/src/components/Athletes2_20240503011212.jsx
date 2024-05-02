import React from 'react';
import './Athletes.css';
import humainicon from "../assets/humainicon.svg"

const MonComposant2 = () => {
  return (
    <div className="containerAthletes">

      <div className="contenuAthletes">
        <h2>ROGER BAMBUCK</h2>
        <p>l’athlète français spécialiste des épreuves de sprint</p>
        <div class="image-button-athl">
          <button />
      </div>
      </div>
        <img src={humainicon} alt="" style={{height:"20px", width:"20px", position:"absolute"}}/>
      <div className="photoAthletes">
        {/* Ajoutez votre composant photo ici */}
        <img src="./src/assets/Athlete2.png" alt="Description de la photo" />
      </div>
      
    </div>
  );
}

export default MonComposant2;
