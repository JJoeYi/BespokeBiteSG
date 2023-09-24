import React, { useState } from "react";
import "./FrontPage.css"; // Import your CSS file

function FrontPage() {
  // State to track the selected taste profiles
  const [selectedProfiles, setSelectedProfiles] = useState({
    spicy: false,
    savory: false,
    sweet: false,
    sour: false,
    bitter: false,
  });

  // Function to toggle the selected state of a taste profile
  const toggleProfile = (profile) => {
    setSelectedProfiles({
      ...selectedProfiles,
      [profile]: !selectedProfiles[profile],
    });
  };

  return (
    <div className="front-page">
      <h1 className="title">BespokeBiteSG</h1>
      <p>I am looking for...</p>
      <div className="taste-profiles">
        <button
          className={`taste-button ${selectedProfiles.spicy ? "selected" : ""}`}
          onClick={() => toggleProfile("spicy")}
        >
          Spicy
        </button>
        <button
          className={`taste-button ${
            selectedProfiles.savory ? "selected" : ""
          }`}
          onClick={() => toggleProfile("savory")}
        >
          Savory
        </button>
        <button
          className={`taste-button ${selectedProfiles.sweet ? "selected" : ""}`}
          onClick={() => toggleProfile("sweet")}
        >
          Sweet
        </button>
        <button
          className={`taste-button ${selectedProfiles.sour ? "selected" : ""}`}
          onClick={() => toggleProfile("sour")}
        >
          Sour
        </button>
        <button
          className={`taste-button ${
            selectedProfiles.bitter ? "selected" : ""
          }`}
          onClick={() => toggleProfile("bitter")}
        >
          Bitter
        </button>
      </div>
    </div>
  );
}

export default FrontPage;
