import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginForm.css';

const LoginForm = ({ onLoginSuccess, switchToRegister }) => { // Add switchToRegister as a prop
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);

      if (response.status === 200) {
        setMessage('Login successful!');
        onLoginSuccess(); // Notify App.js that login was successful
      }
    } catch (error) {
      setMessage('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="container">
      <div className="login form">
        <header>Login</header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <a href="#">Forgot password?</a>
          <input type="submit" className="button" value="Login" />
        </form>
        <p>{message}</p>
        <div className="signup">
          <span className="signup">
            Don't have an account?{' '}
            {/* Call switchToRegister on click */}
            <label style={{ cursor: 'pointer' }} onClick={switchToRegister}>
              Signup
            </label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
