import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      
      setVisible(!isScrollingDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`header ${visible ? '' : 'header-hidden'}`}>
      <div className="announcement-bar">
        HOLI SALE: FLAT 15% OFF ON CHECKOUT →
      </div>
      
      <div className="main-header">
        <div className="header-left">
         {/*<button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <span className="close-icon">×</span>
            ) : (
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </button>*/}
        </div>

        <div className="header-center">
          <a href="/" className="logo">
            <span className="logo-symbol">Ⓐ</span>
            Art.com
          </a>
        </div>

       {/*} <div className="header-right">
          <button className="search-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <button className="cart-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
            </svg>
          </button>
        </div>*/}
      </div>

    {/*   <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="menu-links">
          <a href="/" className="menu-item">HOME</a>
          <a href="/collections" className="menu-item">
            ART COLLECTIONS
            <span className="arrow">→</span>
          </a>
          <a href="/paintings" className="menu-item">
            HANDMADE PAINTINGS
            <span className="arrow">→</span>
          </a>
          <a href="/by-type" className="menu-item">
            ART BY TYPE
            <span className="arrow">→</span>
          </a>
          <a href="/by-room" className="menu-item">
            ART BY ROOM
            <span className="arrow">→</span>
          </a>
          <a href="/custom" className="menu-item">CUSTOM ART FOR HOME</a>
          <a href="/business" className="menu-item">ART FOR BUSINESSES</a>
          <a href="/about" className="menu-item">ABOUT US</a>
        </nav>
      </div>*/}
    </header>
  );
};

export default Navbar; 