import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [buttonIsRed, setButtonIsRed] = useState(true);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonIsRed ? "red" : "blue" }}
        onClick={() => {
          setButtonIsRed(!buttonIsRed);
        }}
      >
        {buttonIsRed ? "Change to blue" : "Change to red"}
      </button>
    </div>
  );
};

export default App;
