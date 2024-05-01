import React, { useState } from 'react';
import './SliderComponent.css';

const SliderComponent = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slide previous" onClick={goToPrevious}>
        {currentIndex > 0 && <img src={slides[currentIndex - 1].image} alt="Previous slide" />}
      </div>
      <div className="slide active">
        <img src={slides[currentIndex].image} alt={slides[currentIndex].caption} />
        <div className="caption">{slides[currentIndex].caption}</div>
      </div>
      <div className="slide next" onClick={goToNext}>
        {currentIndex < slides.length - 1 && <img src={slides[currentIndex + 1].image} alt="Next slide" />}
      </div>
      <div className="navigation">
        {slides.map((slide, index) => (
          <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => goToSlide(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
