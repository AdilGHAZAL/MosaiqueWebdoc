import React from 'react';
import './Athletes.css';
import humainicon from "../assets/humainicon.svg";
import picAth2 from "../assets/Athlete2.png"

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
        
      <div className="photoAthletes">
      {/* <img src={humainicon} alt="" style={{height:"20px", width:"20px", position:"absolute"}}/> */}
        <img src={picAth2} alt="Description de la photo" />
      </div>
      
    </div>
  );
}

export default MonComposant2;
