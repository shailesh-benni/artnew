import React, { useState } from 'react';
import './Pricing.css';
import Modal from './Modal';
import demoImage from '../assets/arttest.jpg'; // Make sure this image exists in your assets

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: "Free trial",
      description: "Best for small teams and freelancers.",
      price: "0",
      buttonText: "Details",
      icon: "📦",
      image: demoImage,
      storage: "10GB",
      users: "2",
      support: "Email"
    },
    {
      name: "Business plan",
      description: "Best for growing teams.",
      price: "20",
      buttonText: "Details",
      icon: "📦",
      image: demoImage,
      storage: "50GB",
      users: "10",
      support: "Priority"
    },
    {
      name: "Enterprise plan",
      description: "Best for large organizations.",
      price: "40",
      buttonText: "Details",
      icon: "📦",
      image: demoImage,
      storage: "100GB",
      users: "Unlimited",
      support: "24/7 Dedicated"
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
              <span className="currency">$</span>
              <span className="amount">{plan.price}</span>
              <span className="period">per month</span>
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