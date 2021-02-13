import React, { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

const App = () => {
  const [buttonColor, setButtonColor] = useState('red');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const colorChanged = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ color: "white", backgroundColor: buttonDisabled ? "gray" : buttonColor }}
        disabled={buttonDisabled}
        onClick={() => {
          setButtonColor(colorChanged);
        }}
      >
        Change to {colorChanged}
      </button>
      <input 
        type="checkbox" 
        id="disable-button-checkbox"
        defaultChecked={buttonDisabled}
        aria-checked={buttonDisabled}
        onChange={() => {
          setButtonDisabled(!buttonDisabled);
        }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
};

export default App;
