// src/App.js
import React, { useEffect, useState } from 'react';
import { requestNotificationPermission } from './utils/notifications';
import Auth from './components/Auth';
import ProgressTracker from './components/ProgressTracker';
import MealPlanner from './components/MealPlanner';
import AIRecommendations from './components/AIRecommendations';
import WearableStats from './components/WearableStats';
import SmartMirror from './components/SmartMirror';
import PersonalizedWorkoutPlans from './components/PersonalizedWorkoutPlans';
import NutritionTracker from './components/NutritionTracker';
import ProgressDashboard from './components/ProgressDashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-indigo-600 w-full py-6 shadow-lg">
        <h1 className="text-white text-4xl font-bold text-center">Smart Fitness App</h1>
      </header>

      <main className="flex-grow container mx-auto p-6">
        {!isAuthenticated ? (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <Auth onLogin={setIsAuthenticated} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <WearableStats />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <AIRecommendations />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <SmartMirror />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <PersonalizedWorkoutPlans />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <NutritionTracker />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <ProgressDashboard />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <ProgressTracker />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <MealPlanner />
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 w-full py-4">
        <p className="text-white text-center">© 2023 Smart Fitness App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;