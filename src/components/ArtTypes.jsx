import React from 'react';
import './ArtTypes.css';

const ArtTypes = () => {
  const artTypes = [
    {
      title: "Travel Inspired Art",
      image: "../assets/sample.png",
      link: "/travel-art"
    },
    {
      title: "Abstract Art",
      image: "/abstract-art.jpg",
      link: "/abstract-art"
    },
    {
      title: "Boho Art",
      image: "/boho-art.jpg",
      link: "/boho-art"
    },
    {
      title: "Modern Art",
      image: "/modern-art.jpg",
      link: "/modern-art"
    },
    {
      title: "Floral Art",
      image: "/floral-art.jpg",
      link: "/floral-art"
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