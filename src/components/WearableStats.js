import React, { useEffect, useState } from "react";

const WearableStats = () => {
  const [heartRate, setHeartRate] = useState(72);
  const [steps, setSteps] = useState(5000);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
      setSteps((prev) => prev + Math.floor(Math.random() * 20));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-purple-600">Wearable Stats</h2>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
          <p className="text-gray-600 mb-2">Heart Rate</p>
          <div className="flex items-center">
            <span className="text-3xl font-bold text-purple-600">{heartRate}</span>
            <span className="ml-2 text-purple-400">BPM</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl">
          <p className="text-gray-600 mb-2">Steps Today</p>
          <div className="flex items-center">
            <span className="text-3xl font-bold text-pink-600">{steps.toLocaleString()}</span>
            <span className="ml-2 text-pink-400">steps</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WearableStats;