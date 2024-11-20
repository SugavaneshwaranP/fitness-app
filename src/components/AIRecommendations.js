import React, { useState } from "react";

const AIRecommendations = () => {
  const [goal, setGoal] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const generateRecommendation = () => {
    if (goal.toLowerCase() === "weight loss") {
      setRecommendation("Try HIIT workouts 3 times a week and focus on a calorie deficit.");
    } else if (goal.toLowerCase() === "muscle gain") {
      setRecommendation("Incorporate strength training 4 times a week and eat a protein-rich diet.");
    } else {
      setRecommendation("Set a goal to receive tailored recommendations!");
    }
  };

  return (
    <div className="p-6 bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">AI-Powered Fitness Assistant</h2>
      <input
        type="text"
        className="border-2 border-indigo-200 rounded-xl w-full p-3 mb-4 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
        placeholder="Enter your fitness goal (e.g., weight loss)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
        onClick={generateRecommendation}
      >
        Get Recommendation
      </button>
      {recommendation && (
        <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
          <p className="text-gray-700">{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default AIRecommendations;