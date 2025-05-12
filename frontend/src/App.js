import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS file for styling

const App = () => {
  const [inputFeature, setInputFeature] = useState('');
  const [prediction, setPrediction] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputFeature(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(`http://127.0.0.1:8000/predict/${encodeURIComponent(inputFeature)}?features=${inputFeature}`);
      setPrediction(response.data[1]);
    } catch (error) {
      setError('Error fetching prediction. Please try again.');
      console.error('Error fetching prediction:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="background-image"></div>
      <div className="background-overlay"></div>
      <div className="content-container">
        <h1 className="title">Cyber Guardian</h1>
        <h3 className="subtitle">Let's Detect Phishing Webistes !!</h3>
        <form onSubmit={handleFormSubmit} className="form-container">
          <label htmlFor='feature' className="form-label">Enter URL:</label>
          <input type='text' id='feature' value={inputFeature} onChange={handleInputChange} className="form-input" />
          <button type='submit' className="form-button" disabled={isLoading}>{isLoading ? 'Predicting...' : 'Predict'}</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
      {prediction && (
        <p className={`form-label prediction-message ${prediction === 'This is a Phishing Site' ? 'phishing' : 'not-phishing'}`}>
          Prediction: {prediction}
        </p>
      )}
    </div>
  );
  
};

export default App;
