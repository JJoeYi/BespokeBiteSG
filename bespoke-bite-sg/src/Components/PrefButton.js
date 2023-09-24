import React, { useState } from "react";
import "./PrefButton.css";

function PrefButton({ name, buttonStates, setButtonStates }) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const handleClick = () => {
    toggleSelected();
    // Create a copy of buttonStates object
    const updatedButtonStates = { ...buttonStates };

    // Toggle state of button
    updatedButtonStates[name] = updatedButtonStates[name] === 0 ? 1 : 0;

    // Update buttonStates in parent component
    setButtonStates(updatedButtonStates);
  };

  return (
    <button
      className={`pref-button ${selected ? "selected" : ""}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default PrefButton;
