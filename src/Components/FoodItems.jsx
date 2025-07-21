import Item from "./Item";

const FoodItems = ({ foodList }) => {
  return (
    <ul className="list-group">
      {foodList.map((food, index) => (
        <Item key={index} foodItem={food} />
      ))}
    </ul>
  );
};

export default FoodItems;
