import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import {useState} from "react";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson)
  const deleteFood = (id) => {
    setFoods(foods.filter(food => food.id !== id))
  }

  const addFood = (food) => {
    setFoods([...foods, food]);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood} />
      
      {foods.map((oneFood) => {
        return (
          <FoodBox key={oneFood.id} food={oneFood} deleteFood={deleteFood} />
        )
      }
      )}
    </div>
  );
}

export default App;
