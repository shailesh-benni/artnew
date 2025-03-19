import React, { useState } from 'react';
import './Gallery.css';
import demoImage from '../assets/arttest.jpg';

const Gallery = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  const artworks = [
    {
      id: 1,
      title: "Prayer For Trees",
      artist: "Arpana Caur",
      type: "Painting",
      medium: "oil on canvas",
      size: "72 x 48 In",
      price: "₹13,44,000",
      image: demoImage
    },
    {
      id: 2,
      title: "Urban Life",
      artist: "Arpana Caur",
      type: "Painting",
      medium: "oil on canvas",
      size: "60 x 40 In",
      price: "₹11,20,000",
      image: demoImage
    },
    {
      id: 3,
      title: "Nature's Harmony",
      artist: "Arpana Caur",
      type: "Painting",
      medium: "oil on canvas",
      size: "48 x 36 In",
      price: "₹9,80,000",
      image: demoImage
    },
    {
      id: 4,
      title: "City Dreams",
      artist: "Arpana Caur",
      type: "Painting",
      medium: "oil on canvas",
      size: "36 x 24 In",
      price: "₹7,50,000",
      image: demoImage
    }
  ];

  return (
    <section className="gallery">
      <div className="gallery-container">
        {artworks.map((art) => (
          <div 
            key={art.id} 
            className="art-card"
            onClick={() => setSelectedArt(art)}
          >
            <div className="art-image">
              <img src={art.image} alt={art.title} />
            </div>
            <div className="art-info">
              <h3>{art.title}</h3>
              <p className="artist">By {art.artist}</p>
              <div className="art-details">
                <p>{art.type}</p>
                <p>{art.medium}</p>
                <p>{art.size}</p>
              </div>
              <div className="art-price">
                <span>{art.price}</span>
              </div>
              <div className="card-actions">
                <button className="like-btn">♡</button>
                <button className="cart-btn">🛒</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simplified Image Modal */}
      {selectedArt && (
        <div className="art-modal-overlay" onClick={() => setSelectedArt(null)}>
          <div className="art-modal-simple" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedArt(null)}
            >
              ×
            </button>
            <div className="modal-image-simple">
              <img src={selectedArt.image} alt={selectedArt.title} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 