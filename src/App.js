import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);

  function onChangeHeight(e) {
    setHeight(e.target.value);
  }
  function onChangeWeight(e) {
    setWeight(e.target.value);
  }
  function onSubmitResult(e) {
    e.preventDefault();
    const newResult = (weight / ((height / 100) ^ 2)).toFixed(2);
    setResult(newResult);
  }

  return (
    <div>
      <h1>BMI Calculator</h1>
      <hr />

      <form onSubmit={onSubmitResult}>
        <div className="form-group">
          <label htmlFor="height">Your Height(cm):</label>
          <input
            type="number"
            name="height"
            value={height}
            onChange={onChangeHeight}
          />
        </div>

        <div className="form-group">
          <label htmlFor="weight">Your Weight(kg):</label>
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={onChangeWeight}
          />
        </div>

        <div className="form-group">
          <button type="submit">Calculate</button>
        </div>
      </form>
      <h2>Your Result: {result}</h2>
      <a
        href="https://www.calculator.net/bmi-calculator.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        In-Depth Calculation
      </a>
    </div>
  );
}

export default App;
