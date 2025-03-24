import React, { useState } from 'react';
import './Pricing.css';
import Modal from './Modal';
import image600 from '../assets/sketches/graphite/uncleaunty.jpg';
import image1000 from '../assets/sketches/pricing1k.png'; // Make sure this image exists in your assets

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: "Sketch Paper Layout A4",
      description: "It follows the A4 standard dimensions (210mm × 297mm), ensuring crisp and precise detailing.",
      price: "600",
      buttonText: "Details",
      icon: "📦",
      image: image600,
      storage: "Customized Sketches",
      support: "Contact if you want to order"
    },
    {
      name: "Sketch Paper Layout A3",
      description: "It follows the A3 standard dimensions (297mm × 420mm), providing a larger workspace for detailed compositions and expansive illustrations.",
      price: "1000",
      buttonText: "Details",
      icon: "📦",
      image: image1000,
      storage: "Customized Sketches",
      support: "Contact if you want to order"
    }
  ];

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <section className="pricing">
      <div className="pricing-heading">
        <h2>Pricing</h2>
      </div>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <div className="plan-header">
              <div className="plan-title">
                <h3>{plan.name}</h3>
                <span className="icon">{plan.icon}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
            </div>
            
            <div className="price">
              <span className="currency">Rs.</span>
              <span className="amount">{plan.price}</span>
              
            </div>

            <button 
              className="plan-button"
              onClick={() => handleOpenModal(plan)}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        plan={selectedPlan}
      />
    </section>
  );
};

export default Pricing; 