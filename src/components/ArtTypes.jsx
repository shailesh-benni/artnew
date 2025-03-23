import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtTypes.css';
import img1 from '../assets/arttest.jpg'

const ArtTypes = () => {
  const navigate = useNavigate();

  const artTypes = [
    {
      title: "Travel Inspired Art",
      image: img1,
      link: "travel-inspired-art"
    },
    {
      title: "Abstract Art",
      image: img1,
      link: "abstract-art"
    },
    {
      title: "Boho Art",
      image: img1,
      link: "boho-art"
    },
    {
      title: "Modern Art",
      image: img1,
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