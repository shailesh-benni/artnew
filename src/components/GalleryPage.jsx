import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './GalleryPage.css';
import demoImage from '../assets/arttest.jpg';

const GalleryPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Mock gallery data - you can replace this with real data
  const galleryImages = [
    { id: 1, src: demoImage, title: "Artwork 1" },
    { id: 2, src: demoImage, title: "Artwork 2" },
    { id: 3, src: demoImage, title: "Artwork 3" },
    { id: 4, src: demoImage, title: "Artwork 4" },
    { id: 5, src: demoImage, title: "Artwork 5" },
    { id: 6, src: demoImage, title: "Artwork 6" },
  ];

  const formatTitle = (type) => {
    return type.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="gallery-page">
      <button 
        className="back-button"
        onClick={() => navigate('/')}
      >
        ← Back to Home
      </button>
      <h1 className="gallery-title">{formatTitle(type)}</h1>
      
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div 
            key={image.id} 
            className="gallery-item"
            style={{ '--animation-order': index }}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.title} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage; 