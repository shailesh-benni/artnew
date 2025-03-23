import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtTypes.css';
import charcoal from '../assets/sketches/charcol/birdonnose.jpg';
import graphite from '../assets/sketches/graphite/baalkrishna.jpg';
import painting from '../assets/sketches/painting/krishna.jpg';
import penart from '../assets/sketches/penart/krishnaradha.jpg';

const ArtTypes = () => {
  const navigate = useNavigate();

  const artTypes = [
    {
      title: "Charcoal",
      image: charcoal,
      link: "travel-inspired-art"
    },
    {
      title: "Graphite",
      image: graphite,
      link: "abstract-art"
    },
    {
      title: "Painting",
      image: painting,
      link: "boho-art"
    },
    {
      title: "Pen Art",
      image: penart,
      link: "modern-art"
    }
  ];

  const handleArtTypeClick = (link) => {
    navigate(`/gallery/${link}`);
  };

  return (
    <section className="art-types">
      <h2 className="section-title">ART BY TYPE</h2>
      <div className="art-types-grid">
        {artTypes.map((art, index) => (
          <div 
            className="art-card" 
            key={index}
            onClick={() => handleArtTypeClick(art.link)}
          >
            <div className="card-image-wrapper">
              <img src={art.image} alt={art.title} />
              <div className="shimmer"></div>
              <div className="art-label">{art.title.toUpperCase()}</div>
            </div>
            <div className="card-title">
              {art.title} <span className="arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtTypes; 