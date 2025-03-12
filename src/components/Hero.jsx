import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image: "/living-room.jpg",
      title: "SHOP NOW",
      overlay: true
    },
    {
      image: "/fleurs-de-la-terre.jpg",
      title: "Fleurs de la Terre",
      subtitle: "New Launch",
      overlay: true
    },
    // Add more slides as needed
  ];

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="hero">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {slide.overlay && <div className="overlay"></div>}
            <div className="slide-content">
              {slide.subtitle && <p className="subtitle">{slide.subtitle}</p>}
              <h2 className="title">{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button className="nav-btn prev" onClick={prevSlide}>
          <span>‹</span>
        </button>
        
        <div className="dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <button className="nav-btn next" onClick={nextSlide}>
          <span>›</span>
        </button>

        <button className="pause-btn" onClick={togglePause}>
          {isPaused ? '▶' : '⏸'}
        </button>
      </div>
    </div>
  );
};

export default Hero; 