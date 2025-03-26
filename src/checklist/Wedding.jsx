import React, { useState } from 'react';
import Step1 from './Page1';
import Step2 from './Page2';
import Step3 from './Page3';
import Step4 from './Page4';

const Wedding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    weddingDate: '',
    budget: '',
    vendors: {
      venue: false,
      catering: false,
      photography: false,
      music: false,
    },
    guestList: [],
    seating: '',
  });

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const handleSubmit = () => {
    console.log('Submitted data:', formData);
    localStorage.setItem('weddingChecklist', JSON.stringify(formData));
    alert('Checklist generated! You can now download or view your checklist.');
  
    // Redirect user to the start page
    navigate('/Page1'); // Adjust the path to your actual start page
  };

  switch (step) {
    case 1:
      return <Step1 formData={formData} updateFormData={updateFormData} nextStep={nextStep} />;
    case 2:
      return <Step2 formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3 formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <Step4 formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />;
    default:
      return <div>Invalid step</div>;
  }
};

export default Wedding;
