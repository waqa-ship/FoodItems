const FoodItem = () =>{
    let foodItem = ['dal','chawal','dehi','roti'];
    return(
        <ul className="list-group">
        {foodItem.map(item =><li key={item} className="list-group-item">{item}</li>)}
      </ul>
    )

};
export default FoodItem;