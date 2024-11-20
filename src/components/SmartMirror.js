import React, { useState } from "react";

const SmartMirror = () => {
  const [posture, setPosture] = useState("Perfect");

  const simulatePostureChange = () => {
    const postures = ["Perfect", "Slouching", "Leaning Forward"];
    setPosture(postures[Math.floor(Math.random() * postures.length)]);
  };

  return (
    <div className="p-6 bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-pink-600">Interactive Mirror</h2>
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl mb-4">
        <p className="text-gray-600 mb-2">Current Posture</p>
        <span 
          className={`text-2xl font-bold ${
            posture === "Perfect" 
              ? "text-green-500" 
              : "text-red-500 animate-pulse"
          }`}
        >
          {posture}
        </span>
      </div>
      <button
        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
        onClick={simulatePostureChange}
      >
        Simulate Posture Change
      </button>
    </div>
  );
};

export default SmartMirror;