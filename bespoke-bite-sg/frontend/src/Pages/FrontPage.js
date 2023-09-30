import React, { useState } from "react";
import "./FrontPage.css";
import PrefButton from "../Components/PrefButton";

function FrontPage() {
  // State to store the button states
  const [buttonStates, setButtonStates] = useState({
    Chinese: 0,
    Indian: 0,
    Malay: 0,
    Spicy: 0,
    Savory: 0,
    Sweet: 0,
    Sour: 0,
    Bitter: 0,
    Meat: 0,
    Seafood: 0,
    Rice: 0,
    Noodles: 0,
    Dessert: 0,
    Snacks: 0,
  });

  // Function to handle "Get Recommendations" button click
  const handleGetRecommendations = async () => {
    // Create an array with the button states
    const buttonStateArray = [
      buttonStates.Spicy,
      buttonStates.Savory,
      buttonStates.Sweet,
      buttonStates.Sour,
      buttonStates.Bitter,
      buttonStates.Meat,
      buttonStates.Seafood,
      buttonStates.Rice,
      buttonStates.Noodles,
      buttonStates.Dessert,
      buttonStates.Snacks,
      buttonStates.Chinese,
      buttonStates.Indian,
      buttonStates.Malay,
    ];

    console.log(buttonStateArray);

    const response = await fetch(
      "http://jjoeyi.pythonanywhere.com/recommend_kmeans",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profiles: buttonStateArray }),
      }
    );

    const data = await response.json();
    setRecommendations(data);
  };

  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="front-page">
      <h1 className="title">BespokeBiteSG</h1>
      <h3>I am looking for...</h3>
      <div className="taste-profiles">
        <div className="button-row">
          <PrefButton
            name="Chinese"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
          <PrefButton
            name="Indian"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
          <PrefButton
            name="Malay"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
        </div>

        <div className="button-row">
          <PrefButton
            name="Spicy"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
          <PrefButton
            name="Savory"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
          <PrefButton
            name="Sweet"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
          <PrefButton
            name="Sour"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
          <PrefButton
            name="Bitter"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
        </div>

        <div className="button-row">
          <PrefButton
            name="Meat"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
          <PrefButton
            name="Seafood"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
          <PrefButton
            name="Rice"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
          <PrefButton
            name="Noodles"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
          <PrefButton
            name="Dessert"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
          <PrefButton
            name="Snacks"
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
        </div>
      </div>

      {/* "Get Recommendations" button */}
      <button
        className="get-recommendations-button"
        onClick={handleGetRecommendations}
      >
        Get Recommendations
      </button>
      <ul>
        {recommendations.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FrontPage;
