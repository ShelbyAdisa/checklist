import React, { useState } from 'react';

const Page1 = ({ formData, updateFormData, nextStep }) => {
  const [weddingDate, setWeddingDate] = useState(formData.weddingDate);
  const [budget, setBudget] = useState(formData.budget);

  const handleNext = (e) => {
    e.preventDefault();
    updateFormData({ weddingDate, budget });
    nextStep();
  };

  return (
    <form onSubmit={handleNext}style={styles.formContainer}>
      <h1 style={styles.heading}><b>WEDDING DATE AND BUDGET</b></h1>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Wedding Date:</label>
        <input 
          type="date" 
          value={weddingDate} 
          onChange={(e) => setWeddingDate(e.target.value)} 
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Budget:</label>
        <input 
          type="number" 
          value={budget} 
          onChange={(e) => setBudget(e.target.value)} 
          placeholder="$ Enter your budget" 
          required
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Next</button>
    </form>
  );
};
const styles = {
  formContainer: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f9ebea',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    padding: '10px',
    fontWeight: 'bold',
    fontSize: '30px',
  },
  inputGroup: {
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#d2b4de',
    color: 'black',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
export default Page1;
