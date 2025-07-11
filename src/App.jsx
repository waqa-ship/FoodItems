import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  let FoodItem = [];
  // let FoodItem = ['dal','chawal','dehi','roti']
  return (
    <>
      <h1>Healthy food</h1>
      {FoodItem.length === 0 ? <h3 className="text-danger">I am hungry 😋</h3> :null}
      <ul className="list-group">
        {FoodItem.map(item =><li key={item} className="list-group-item">{item}</li>)}
      </ul>
    </>
  );
}

export default App;
