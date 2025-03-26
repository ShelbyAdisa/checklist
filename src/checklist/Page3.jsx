import React, { useState } from "react";

const Page3 = ({ formData, updateFormData, nextStep, prevStep }) => {
  const [guestName, setGuestName] = useState("");
  const [guestList, setGuestList] = useState(formData.guestList || []);

  const handleAddGuest = (e) => {
    e.preventDefault();
    if (guestName.trim()) {
      const updatedGuestList = [...guestList, guestName.trim()];
      setGuestList(updatedGuestList);
      setGuestName("");
      updateFormData({ guestList: updatedGuestList });
    }
  };

  const handleNext = () => {
    if (guestList.length === 0) {
      alert("Please add at least one guest to proceed.");
      return;
    }
    nextStep();
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}><b>GUEST LIST</b></h2>
      
      <form onSubmit={handleAddGuest} style={styles.inputGroup}>
        <input 
          type="text"
          placeholder="Enter guest name"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.addButton}>Add Guest</button>
      </form>

      <ul style={styles.guestList}>
        {guestList.map((guest, index) => (
          <li key={index} style={styles.guestItem}>{guest}</li>
        ))}
      </ul>
      <button onClick={handleNext} style={styles.button}>Next</button>
      <button onClick={prevStep} style={styles.backButton}>Back</button>
      
    </div>
  );
};

const styles = {
  formContainer: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px",
    padding: "10px",
    fontSize: "30px",
  },
  inputGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "8px 15px",
    backgroundColor: "#c01a96",
    color: "black",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  guestList: {
    listStyle: "none",
    padding: "0",
    marginBottom: "15px",
  },
  guestItem: {
    padding: "5px",
    backgroundColor: "#f8f9fa",
    borderRadius: "5px",
    marginBottom: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#d2b4de",
    color: "black",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  backButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#6c757d",
    color: "black",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Page3;
