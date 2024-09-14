// src/components/LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://localhost:7038/api/User/login?email=${email}`);
        
      const data = await response.json();

      if (data.exists) {
          setMessage("This email is already in use.");
      } else {
          setMessage("This email is available.");
      }
  } catch (error) {
      setMessage("An error occurred while checking the email.");
  }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {message && <p>{message}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
