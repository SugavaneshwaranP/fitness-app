// src/components/MealPlanner.js
import React, { useState } from 'react';

const MealPlanner = () => {
  const [meal, setMeal] = useState('');
  const [mealList, setMealList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMealList([...mealList, meal]);
    setMeal('');
  };

  return (
    <div>
      <h2>Meal Planner</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          placeholder="Enter your meal"
          required
        />
        <button type="submit">Plan Meal</button>
      </form>
      <ul>
        {mealList.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealPlanner;