// src/components/Auth.js
import React, { useState } from 'react';

const Auth = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a login process
    setTimeout(() => {
      // Check against the default credentials
      if (username === 'user' && password === 'password') {
        setIsLoggedIn(true); // Set logged-in state
        onLogin(true); // Successful login
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 1000); // Simulate a network request delay
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      {isLoggedIn ? (
        <div className="text-center">
          <h3 className="text-xl font-semibold">Welcome, {username}!</h3>
          <p>Your username is: <strong>{username}</strong></p>
          <p>Your password is: <strong>{password}</strong></p>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Type 'user' for login"
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type 'password' for login"
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className={`w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-indigo-700 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Auth;