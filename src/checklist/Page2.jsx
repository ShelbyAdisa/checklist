import React, { useState } from 'react';

const Page2 = ({ formData, updateFormData, nextStep, prevStep }) => {
  const [vendors, setVendors] = useState(formData.vendors);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setVendors({
      ...vendors,
      [name]: checked,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();

    // Check if at least one vendor is selected
    const isAtLeastOneSelected = Object.values(vendors).some((value) => value);
    if (!isAtLeastOneSelected) {
      alert('Please select at least one vendor to proceed.');
      return;
    }

    updateFormData({ vendors });
    nextStep();
  };

  return (
    <form onSubmit={handleNext} style={styles.formContainer}>
      <h2 style={styles.heading}><b>CHOOSE MUST-HAVES</b></h2>

      {["venue", "catering", "photography", "music"].map((vendor) => (
        <div key={vendor} style={styles.inputGroup}> 
          <label style={styles.checkboxLabel}>
            <input 
              type="checkbox" 
              name={vendor}
              checked={vendors[vendor]} 
              onChange={handleCheckboxChange} 
              style={styles.checkbox}
            />
            {vendor.charAt(0).toUpperCase() + vendor.slice(1)}
          </label>
        </div>
      ))}

      <button type="submit" style={styles.button}>Next</button>
      <button type="button" onClick={prevStep} style={styles.backButton}>Back</button>
    </form>
  );
};

const styles = {
  formContainer: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f9ebea',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    padding: '10px',
    fontSize: '30px',
  },
  inputGroup: {
    marginBottom: '10px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    cursor: 'pointer',
  },
  checkbox: {
    marginRight: '10px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#d2b4de',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  backButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#6c757d',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  }
};

export default Page2;
