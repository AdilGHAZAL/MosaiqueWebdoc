import React from 'react';
import SliderComponent from './SliderComponent'; 
import './SliderComponentContainer.css'; 
import fille1 from "../assets/ImageFille2.png";
import fille2 from "../assets/ImageFille.png";
import fille3 from "../assets/ImageFille3.png";

function SliderComponentContainer() {
  const slides = [
    {
      image: fille1,
      caption: '30 Km Pro'
    },
    {
      image: fille2,
      caption: '10 Km Intermédiaire'
    },
    {
      image: fille3,
      caption: '3 Km Débutant'
    }
  ];

  return (
    <div className="slider-component-container">
      <h1>Relevez les défis et partagez-les</h1>
      <p>Participez aux challenges proposés et gagnez des lots*</p>
      <p>*disponibles depuis la boutique officielle sur présentation du mail</p>
      <SliderComponent slides={slides} />
    </div>
  );
}

export default SliderComponentContainer;
