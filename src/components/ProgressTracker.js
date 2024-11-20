// src/components/ProgressTracker.js
import React, { useState } from 'react';

const ProgressTracker = () => {
  const [progress, setProgress] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addProgress = () => {
    setProgress([...progress, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <h2>Progress Tracker</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your progress"
      />
      <button onClick={addProgress}>Add Progress</button>
      <ul>
        {progress.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracker;