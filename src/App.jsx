import React from "react";
import FoodItem from "./Components/FoodItems"
import ErrorMessage from "./Components/ErrorMessage"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  //  let foodItem = [];
    //  let foodItem = ['dal','chawal','dehi','roti'];
    
  return (
    <>
      <h1>Healthy food</h1>
     <ErrorMessage/>
      <FoodItem />
    </>
  );
}

export default App;
