import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [buttonIsRed, setButtonIsRed] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonIsRed ? "red" : "blue" }}
        disabled={buttonDisabled}
        onClick={() => {
          setButtonIsRed(!buttonIsRed);
        }}
      >
        {buttonIsRed ? "Change to blue" : "Change to red"}
      </button>
      <input 
        type="checkbox" 
        id="disable-button-checkbox"
        defaultChecked={buttonDisabled}
        aria-checked={buttonDisabled}
        onChange={() => {
          setButtonDisabled(!buttonDisabled)
        }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
};

export default App;
