import React, { useState } from "react";
import * as Braze from "@braze/web-sdk";
const AgeGate = () => {
  const [age, setAge] = useState("");

  const handleAgeInputChange = (event) => {
    setAge(event.target.value);
  };

  const handleAgeSubmit = () => {
    const parsedAge = parseInt(age);
    if (parsedAge >= 18) {
      // Navigate to Home screen (assuming it's another component)
      // You may need to implement your own navigation logic here
      console.log("Navigate to Home screen");
    } else {
      // Disable Braze SDK
      Braze.disable();
      alert("Sorry, this app is only for users 18 years and older.");
    }
  };

  return (
    <div>
      <h1>Welcome to our Children's Gaming App!</h1>
      <button onClick={() => alert("Please enter your age:")}>Enter Age</button>
      {/* This could be a styled alert instead */}
      <input
        type="number"
        value={age}
        onChange={handleAgeInputChange}
        placeholder="Enter your age"
      />
      <button onClick={handleAgeSubmit}>Submit</button>
    </div>
  );
};

export default AgeGate;
