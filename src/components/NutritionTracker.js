import React, { useState } from "react";

const NutritionTracker = () => {
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");
  const [meals, setMeals] = useState([]);

  const addMeal = () => {
    if (meal && calories) {
      setMeals([...meals, { meal, calories, date: new Date().toLocaleString() }]);
      setMeal("");
      setCalories("");
    }
  };

  const totalCalories = meals.reduce((total, item) => total + parseInt(item.calories), 0);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Nutrition Tracker</h2>
      <input 
        type="text" 
        value={meal} 
        onChange={(e) => setMeal(e.target.value)} 
        placeholder="Log your meal" 
      />
      <input 
        type="number" 
        value={calories} 
        onChange={(e) => setCalories(e.target.value)} 
        placeholder="Calories" 
      />
      <button onClick={addMeal}>Add Meal</button>
      <ul>
        {meals.map((m, index) => (
          <li key={index}>{`${m.meal} - ${m.calories} calories on ${m.date}`}</li>
        ))}
      </ul>
      <p>Total Calories: {totalCalories}</p>
    </div>
  );
};

export default NutritionTracker;