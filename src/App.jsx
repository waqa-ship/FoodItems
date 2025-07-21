import React from "react";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItem = ["dal", "chawal", "dehi", "roti"];
  // let foodItem = []; // Uncomment this to test empty state

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage item={foodItem} /> {/* ✅ Pass array, not component */}
      <FoodItems foodList={foodItem} /> {/* ✅ Correct prop name */}
    </>
  );
}

export default App;
