import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './GalleryPage.css';

// Import images for Charcoal Art
import charcoal1 from '../assets/sketches/charcol/birdonnose.jpg';
import charcoal2 from '../assets/sketches/charcol/deergirl.jpg';
import charcoal3 from '../assets/sketches/charcol/dog.jpg';
import charcoal4 from '../assets/sketches/charcol/ganapati.jpg';
import charcoal5 from '../assets/sketches/charcol/hanuman.jpg';
import charcoal6 from '../assets/sketches/charcol/punith.jpg';
import charcoal7 from '../assets/sketches/charcol/swimming.jpg';
import charcoal8 from '../assets/sketches/charcol/tiger.jpg';


// Import images for Graphite Art
import graphite1 from '../assets/sketches/graphite/akkas.jpg';
import graphite2 from '../assets/sketches/graphite/anamika.jpg';
import graphite3 from '../assets/sketches/graphite/army.jpg';
import graphite4 from '../assets/sketches/graphite/baalkrishna.jpg';
import graphite5 from '../assets/sketches/graphite/baby.jpg';
import graphite6 from '../assets/sketches/graphite/babywithmum.jpg';
import graphite7 from '../assets/sketches/graphite/eyes.jpg';
import graphite8 from '../assets/sketches/graphite/jesus.jpg';
import graphite9 from '../assets/sketches/graphite/kissingcouple.jpg';
import graphite10 from '../assets/sketches/graphite/lion.jpg';
import graphite11 from '../assets/sketches/graphite/manya.jpg';
import graphite12 from '../assets/sketches/graphite/navyofficer.jpg';
import graphite13 from '../assets/sketches/graphite/newcouple.jpg';
import graphite14 from '../assets/sketches/graphite/police.jpg';
import graphite15 from '../assets/sketches/graphite/pulikeshi.jpg';
import graphite16 from '../assets/sketches/graphite/puttpaapu.jpg';
import graphite17 from '../assets/sketches/graphite/randomfaces.jpg';
import graphite18 from '../assets/sketches/graphite/uncleaunty.jpg';
import graphite19 from '../assets/sketches/graphite/whitedog.jpg';

// Import images for Paintings
import painting1 from '../assets/sketches/painting/kidgirl.jpg';
import painting2 from '../assets/sketches/painting/krishna.jpg';
import painting3 from '../assets/sketches/painting/manya.jpg';
import painting4 from '../assets/sketches/painting/radhakrishna.jpg';
import painting5 from '../assets/sketches/painting/ram.jpg';


// Import images for Pen Art
import pen1 from '../assets/sketches/penart/cycling.jpg';
import pen2 from '../assets/sketches/penart/kidgirl.jpg';
import pen3 from '../assets/sketches/penart/krishnaradha.jpg';
import pen4 from '../assets/sketches/penart/manya.jpg';
import pen5 from '../assets/sketches/penart/smilyman.jpg';
import pen6 from '../assets/sketches/penart/tilakwadi.jpg';
import pen7 from '../assets/sketches/penart/tilakwadiclub.jpg';


const GalleryPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery data organized by type
  const galleryData = {
    'charcoal': [
      { id: 1, src: charcoal1, title: "Bird on Nose" },
      { id: 2, src: charcoal2, title: "Elephant" },
      { id: 3, src: charcoal3, title: "Ganesh" },
      { id: 4, src: charcoal4, title: "Krishna" },
      { id: 5, src: charcoal5, title: "Old Man" },
      { id: 6, src: charcoal6, title: "Shiva" },
      { id: 7, src: charcoal7, title: "Shiva" },
      { id: 8, src: charcoal8, title: "Shiva" },

    ],
    'graphite': [
      { id: 1, src: graphite1, title: "Baal Krishna" },
      { id: 2, src: graphite2, title: "Buddha" },
      { id: 3, src: graphite3, title: "Couple" },
      { id: 4, src: graphite4, title: "Krishna" },
      { id: 5, src: graphite5, title: "Old Man" },
      { id: 6, src: graphite6, title: "Shiva" },
      { id: 7, src: graphite7, title: "Shiva" },
      { id: 8, src: graphite8, title: "Shiva" },
      { id: 9, src: graphite9, title: "Shiva" },
      { id: 10, src: graphite10, title: "Shiva" },
      { id: 11, src: graphite11, title: "Shiva" },
      { id: 12, src: graphite12, title: "Shiva" },
      { id: 13, src: graphite13, title: "Shiva" },
      { id: 14, src: graphite14, title: "Shiva" },
      { id: 15, src: graphite15, title: "Shiva" },
      { id: 16, src: graphite16, title: "Shiva" },
      { id: 17, src: graphite17, title: "Shiva" },
      { id: 18, src: graphite18, title: "Shiva" },
      { id: 19, src: graphite19, title: "Shiva" },
    ],
    'painting': [
      { id: 1, src: painting1, title: "Krishna" },
      { id: 2, src: painting2, title: "Radha" },
      { id: 3, src: painting3, title: "Shiva" },
      { id: 4, src: painting4, title: "Krishna 2" },
      { id: 5, src: painting5, title: "Radha 2" },
    ],
    'pen-art': [
      { id: 1, src: pen1, title: "Krishna Radha" },
      { id: 2, src: pen2, title: "Mandala" },
      { id: 3, src: pen3, title: "Mandala 2" },
      { id: 4, src: pen4, title: "Peacock" },
      { id: 5, src: pen5, title: "Shiva" },
      { id: 6, src: pen6, title: "Temple" },
      { id: 7, src: pen7, title: "Temple" },
    ]
  };

  // Get the correct images based on the type
  const getGalleryImages = () => {
    const typeMapping = {
      'travel-inspired-art': 'charcoal',
      'abstract-art': 'graphite',
      'boho-art': 'painting',
      'modern-art': 'pen-art'
    };
    
    return galleryData[typeMapping[type]] || [];
  };

  const formatTitle = (type) => {
    const titleMapping = {
      'travel-inspired-art': 'Charcoal Art',
      'abstract-art': 'Graphite Art',
      'boho-art': 'Paintings',
      'modern-art': 'Pen Art'
    };
    return titleMapping[type] || type.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const galleryImages = getGalleryImages();

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