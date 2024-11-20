// components/PersonalizedWorkoutPlans.js
import React, { useState } from "react";

const PersonalizedWorkoutPlans = () => {
  const [goal, setGoal] = useState("");
  const [workoutPlan, setWorkoutPlan] = useState("");

  const generatePlan = () => {
    // Dummy plan generation logic
    const plans = {
      weightLoss: "30 mins cardio + 15 mins strength training",
      muscleGain: "45 mins strength training + 15 mins cardio",
      endurance: "60 mins running or cycling",
    };
    setWorkoutPlan(plans[goal]);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Personalized Workout Plans</h2>
      <select onChange={(e) => setGoal(e.target.value)}>
        <option value="">Select your goal</option>
        <option value="weightLoss">Weight Loss</option>
        <option value="muscleGain">Muscle Gain</option>
        <option value="endurance">Endurance</option>
      </select>
      <button onClick={generatePlan}>Generate Plan</button>
      {workoutPlan && <p>Your Plan: {workoutPlan}</p>}
    </div>
  );
};

export default PersonalizedWorkoutPlans;