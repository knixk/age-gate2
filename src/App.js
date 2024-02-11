import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import * as braze from "@braze/web-sdk";
import "./App.css"; // Import CSS file for styling

// Home component
const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Home Screen!</h1>
      <p>Feel free to explore our Children's Gaming App.</p>
    </div>
  );
};

// AgeGate component
const AgeGate = () => {
  const [age, setAge] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleAgeInputChange = (event) => {
    setAge(event.target.value);
  };

  const handleAgeSubmit = () => {
    const parsedAge = parseInt(age);
    if (parsedAge >= 18) {
      // Enable Braze SDK
      braze.initialize("bfe1d7a8-2c42-428e-a5fd-5757c0f6507d", {
        baseUrl: "sdk.fra-02.braze.eu",
        enableLogging: true,
      });

      alert('We are tracking your behaviour to provide a better experience...')

      navigate("/home"); // Navigate to Home screen
    } else {
      // Don't initialize Braze SDK
      alert("Sorry, this app is only for users 18 years and older.");
    }
  };

  return (
    <div className="container">
      <h1>Welcome to our Children's Gaming App!</h1>
      {/* This could be a styled alert instead */}
      <input
        type="number"
        value={age}
        onChange={handleAgeInputChange}
        placeholder="Enter your age"
        className="input"
      />
      <button onClick={handleAgeSubmit} className="btn">
        Submit
      </button>
    </div>
  );
};

// App component
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AgeGate />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
