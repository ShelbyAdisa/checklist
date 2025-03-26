import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Page4 = ({ formData, prevStep, submitForm }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (isSubmitted) return; // Prevent multiple submissions
    setIsSubmitted(true); // Disable button while processing

    console.log("Submitted data:", formData);
    localStorage.setItem("weddingChecklist", JSON.stringify(formData));

    alert("Checklist Submitted succesfully");

    
    setTimeout(() => {
      submitForm();
      navigate("/"); 
    }, 500);
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}><b>REVIEW AND SUBMIT</b></h2>

      <div style={styles.summaryBox}>
        <h3 style={styles.subHeading}>Wedding Details</h3>
        <p><strong>Date:</strong> {formData.weddingDate || "Not Set"}</p>
        <p><strong>Budget:</strong> ${formData.budget || "Not Set"}</p>

        <h3 style={styles.subHeading}>Vendors</h3>
        <ul style={styles.summaryList}>
          {Object.keys(formData.vendors || {}).map((vendor) => 
            formData.vendors[vendor] ? <li key={vendor}>{vendor.charAt(0).toUpperCase() + vendor.slice(1)}</li> : null
          )}
        </ul>

        <h3 style={styles.subHeading}>Guest List</h3>
        <ul style={styles.summaryList}>
          {formData.guestList?.length > 0 ? formData.guestList.map((guest, index) => (
            <li key={index}>{guest}</li>
          )) : <p>No guests added</p>}
        </ul>
      </div>

      <button 
        onClick={handleSubmit} 
        style={isSubmitted ? styles.disabledButton : styles.submitButton}
        disabled={isSubmitted}
      >
        {isSubmitted ? "Submitted" : "Submit"}
      </button>
      <button onClick={prevStep} style={styles.backButton}>Back</button>
    </div>
  );
};

const styles = {
  formContainer: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#f9ebea",
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px",
    padding: "10px",
    fontSize: "30px",
  },
  subHeading: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  summaryBox: {
    padding: "15px",
    backgroundColor: "#f8f9fa",
    borderRadius: "5px",
    marginBottom: "15px",
  },
  summaryList: {
    listStyle: "none",
    padding: "0",
    marginBottom: "15px",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#C01A96",
    color: "black",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  disabledButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#6c1f7d",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "not-allowed",
    marginTop: "10px",
  },
  backButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#6c757d",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Page4;
