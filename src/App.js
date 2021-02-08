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
        defaultChecked={buttonDisabled}
        aria-checked={buttonDisabled}
        onChange={() => {
          setButtonDisabled(!buttonDisabled)
        }}
      />
    </div>
  );
};

export default App;
