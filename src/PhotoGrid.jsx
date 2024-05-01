import React from 'react';
import './PhotoGrid.css'; // Import your CSS file

const PhotoGrid = () => {
  return (
    <div className='container'>
        <div className="photoGridContainer">
      <div className="div1"> 
      <img src="./src/assets/PhotoInsta4.png" alt="Description of Image 1" />
      </div>
      <div className="div2"> 
      <img src="./src/assets/PhotoInsta3.png" alt="Description of Image 1" />
      </div>
      <div className="div3">
         <img src="./src/assets/PhotoInsta5.png" alt="Description of Image 1" />
      </div>
      <div className="div4">
         <img src="./src/assets/PhotoInsta1.png" alt="Description of Image 1" />
      </div>
      <div className="div5">
         <img src="./src/assets/PhotoInsta2.png" alt="Description of Image 1" />
      </div>
      <div className="div6">
         <img src="./src/assets/PhotoInsta6.png" alt="Description of Image 1" />
      </div>
      </div>
      <div className='photoGridText'>
        <p>
            Partagez vos réussites en groupe ou solo et gagnez des
            récompenses*
            *des médailles,  des goodies JO, des bons d(achats chez nos partenaires et bien d’autres encore ...
        </p>
      </div>
    </div>
  );
}

export default PhotoGrid;
