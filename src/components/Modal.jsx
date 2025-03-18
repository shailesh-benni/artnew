import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, plan }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-body">
          <h3>{plan.name}</h3>
          
          <div className="modal-image">
            <img src={plan.image} alt={plan.name} />
          </div>
          
          <div className="modal-details">
            <h4>Plan Details:</h4>
            <ul>
              <li>Access to all basic features</li>
              <li>Up to {plan.storage} storage</li>
              <li>{plan.users} team members</li>
              <li>{plan.support} support</li>
            </ul>
            
            <div className="modal-price">
              <span className="price-amount">${plan.price}</span>
              <span className="price-period">per month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 