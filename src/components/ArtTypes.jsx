import React from 'react';
import './ArtTypes.css';
import img1 from '../assets/arttest.jpg'

const ArtTypes = () => {
  const artTypes = [
    {
      title: "Travel Inspired Art",
      image: img1,
      link: "/travel-art"
    },
    {
      title: "Abstract Art",
      image: img1,
      link: "/abstract-art"
    },
    {
      title: "Boho Art",
      image: img1,
      link: "/boho-art"
    },
    {
      title: "Modern Art",
      image: img1,
      link: "/modern-art"
    }
  ];

  return (
    <section className="art-types">
      <h2 className="section-title">ART BY TYPE</h2>
      <div className="art-types-grid">
        {artTypes.map((art, index) => (
          <a href={art.link} className="art-card" key={index}>
            <div className="card-image-wrapper">
              <img src={art.image} alt={art.title} />
              <div className="shimmer"></div>
              <div className="art-label">{art.title.toUpperCase()}</div>
            </div>
            <div className="card-title">
              {art.title} <span className="arrow">→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ArtTypes; 