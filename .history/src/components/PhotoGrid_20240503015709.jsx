import React from 'react';
import './PhotoGrid.css'; 
import insta1 from "../assets/PhotoInsta4.png";
import insta2 from "../assets/PhotoInsta3.png";
import insta3 from "../assets/PhotoInsta5.png";
import insta4 from "../assets/PhotoInsta1.png";
import insta5 from "../assets/PhotoInsta2.png";
import insta6 from "../assets/PhotoInsta6.png";


const PhotoGrid = () => {
  return (
    <div className='container'>
        <div className="photoGridContainer">
      <div className="div1"> 
      <img src={insta1} alt="Description of Image 1" />
      </div>
      <div className="div2"> 
      <img src={insta2} alt="Description of Image 1" />
      </div>
      <div className="div3">
         <img src={insta3} alt="Description of Image 1" />
      </div>
      <div className="div4">
         <img src={insta4} alt="Description of Image 1" />
      </div>
      <div className="div5">
         <img src={insta5} alt="Description of Image 1" />
      </div>
      <div className="div6">
         <img src={insta6} alt="Description of Image 1" />
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
